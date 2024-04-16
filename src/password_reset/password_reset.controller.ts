import { BadRequestException, Controller, NotFoundException, Patch, Query } from '@nestjs/common';
import { PasswordResetService } from './password_reset.service';


@Controller('password-reset')
export class PasswordResetController {
  constructor(private passwordResetService: PasswordResetService) {}

  @Patch('password')
  async enviarToken(@Query('correo') correo: string){
    console.log("eit");
    const hecho = await this.passwordResetService.enviarCorreoToken(correo);
    if(!hecho) throw new NotFoundException('Usuario no encontrado');
    return hecho;
  }

  @Patch('token')
  async reestablecerPwd(@Query('token') token: string, @Query('pwd') pwd: string){
    console.log(token, pwd);
    try {
      return await this.passwordResetService.reestablecerPwd(token, pwd);
    } catch (error) {
      if(error.message === 'Usuario no encontrado') throw new NotFoundException('Usuario no encontrado');
      if(error.message === 'Token inválido') throw new BadRequestException('Token inválido');
      
    }
  }
}
