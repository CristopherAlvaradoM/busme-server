import { Controller, NotFoundException, Patch, Query } from '@nestjs/common';
import { PasswordResetService } from './password_reset.service';

@Controller('admin/password-reset')
export class PasswordResetController {
  constructor(private passwordResetService: PasswordResetService) {}

  @Patch()
  async enviarToken(@Query('correo') correo: string){
    const done = await this.passwordResetService.enviarCorreoToken(correo);
    if(!done) throw new NotFoundException('Usuario no encontrado');
    return done;
  }
}
