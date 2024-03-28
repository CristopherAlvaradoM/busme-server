import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as CryptoJS from 'crypto-js';
import * as jwt from 'jsonwebtoken'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;
    if(!token) throw new UnauthorizedException({mensaje: 'Token faltante'});
    try {
      const decryptedToken = CryptoJS.AES.decrypt(token, process.env.CRYPTO_SECRET_KEY).toString(CryptoJS.enc.Utf8);
      const auth = jwt.verify(decryptedToken, process.env.JWT_SECRET_KEY) as {usuario: string};
      const usuario = JSON.parse(auth.usuario);
      if(usuario.tipoUsuario !== 'admin') throw new UnauthorizedException({mensaje: 'Unathorized user'});
      if(!auth) throw new UnauthorizedException({mensaje: 'Invalid token'});
    } catch (error) {
      if(error.message === 'Malformed UTF-8 data') throw new UnauthorizedException({mensaje: 'Invalid token'});
    }

    next();
  }
}
