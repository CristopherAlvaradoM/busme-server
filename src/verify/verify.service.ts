import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import * as CryptoJS from 'crypto-js';
import { CrearUsuarioDto } from 'src/dto/CrearUsuario.dto';

@Injectable()
export class VerifyService {

  async hasAcces(token: string, route: string) {
    if(!token || !route) return false;
    const decryptedToken = CryptoJS.AES.decrypt(token, process.env.CRYPTO_SECRET_KEY).toString(CryptoJS.enc.Utf8);
    const user = jwt.verify(decryptedToken, process.env.JWT_SECRET_KEY) as { usuario: CrearUsuarioDto };
    if(route === 'superadmin' && user.usuario.tipoUsuario === 'Superadministrador') return true;
    if(route === 'admin' && user.usuario.tipoUsuario === 'Administrador') return true;
    if(route === 'calidad' && user.usuario.tipoUsuario === 'Calidad') return true;
    return false
  }
}
