import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario } from 'src/schemas/user.schema';

@Injectable()
export class PasswordResetService {
  constructor(@InjectModel(Usuario.name) private usuarioModel: Model<Usuario>, private readonly mailService: MailerService) {}

  URL: string = 'http://localhost:3000/password-reset?token=';

  async enviarCorreoToken(correo: string): Promise<boolean> {
    const usuario = await this.usuarioModel.findOne({ correo });
    if(!usuario) return false;
    usuario.tokenResetPwd = Math.random().toString(36).substring(2);
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
}
