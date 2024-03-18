import { Controller, Get, Query, NotFoundException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('admin/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  /**
   * Endpoint for admin authentication.
   * 
   * @param correo - The email address of the admin.
   * @param contrasena - The password of the admin.
   * @returns an encrypted token if the user is found with the admin data.
   * @throws NotFoundException if the admin is not found.
   */
  @Get()
   async auth(@Query('correo') correo: string, @Query('contrasena') contrasena: string){
      const auth =  await this.authService.login(correo, contrasena);
      if(!auth) throw new NotFoundException('Usuario no encontrado');
      return auth;
  }
}
