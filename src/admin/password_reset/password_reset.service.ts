import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario } from 'src/schemas/user.schema';
import * as jwt from 'jsonwebtoken'
import * as bcrypt from 'bcrypt'

@Injectable()
export class PasswordResetService {
  constructor(@InjectModel(Usuario.name) private usuarioModel: Model<Usuario>, private readonly mailService: MailerService) {}

  URL: string = 'http://localhost:3000/password-reset?token=';

  async enviarCorreoToken(correo: string): Promise<boolean> {
    const usuario = await this.usuarioModel.findOne({ correo });
    if(!usuario) return false;
    usuario.tokenResetPwd = jwt.sign({usuario: usuario._id}, process.env.JWT_SECRET_KEY)
    await usuario.save();
    const enviarCorreo = async () => {
      await this.mailService.sendMail({
        to: correo,
        subject: 'Cambio de contraseña',
        text: `Para cambiar tu contraseña, haz click en el siguiente enlace: ${this.URL}${usuario.tokenResetPwd}`
      });
    };
    await enviarCorreo();
    return true;
  }

  async reestablecerPwd(token: string, pwd: string): Promise<boolean> {
    if(!token || !pwd) throw new Error('Faltan datos');
    const { usuario: idUsuario } = jwt.verify(token, process.env.JWT_SECRET_KEY) as jwt.JwtPayload;
    const usuario = await this.usuarioModel.findById(idUsuario);
    if(!usuario) throw new Error('Usuario no encontrado');
    if(!(usuario.tokenResetPwd === token)) throw new Error('Token inválido');

    const salt = await bcrypt.genSalt(10);
    const nuevaPwd = await bcrypt.hash(pwd, salt);
    await this.usuarioModel.findByIdAndUpdate(usuario._id, { $set: {contrasena: nuevaPwd,}, $unset: {tokenResetPwd: 1}});

    return true
  }
}
