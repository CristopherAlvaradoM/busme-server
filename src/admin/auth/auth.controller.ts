import { Controller, Get, Query, NotFoundException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('admin/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get()
   async auth(@Query('correo') correo: string, @Query('contrasena') contrasena: string){
      const auth =  await this.authService.login(correo, contrasena);
      if(!auth) throw new NotFoundException('Usuario no encontrado');
      return auth;
  }
}
