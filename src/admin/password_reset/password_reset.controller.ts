import { BadRequestException, Body, Controller, NotFoundException, Patch, Query } from '@nestjs/common';
import { PasswordResetService } from './password_reset.service';

@Controller('admin/password-reset')
export class PasswordResetController {
  constructor(private passwordResetService: PasswordResetService) {}

  @Patch('password')
  async enviarToken(@Query('correo') correo: string){
    const hecho = await this.passwordResetService.enviarCorreoToken(correo);
    if(!hecho) throw new NotFoundException('Usuario no encontrado');
    return hecho;
  }

  @Patch('token')
  async reestablecerPwd(@Body('token') token: string, @Body('pwd') pwd: string){
    try {
      return await this.passwordResetService.reestablecerPwd(token, pwd);
    } catch (error) {
      if(error.message === 'Usuario no encontrado') throw new NotFoundException('Usuario no encontrado');
      if(error.message === 'Token inválido') throw new BadRequestException('Token inválido');
      
    }
  }
}
