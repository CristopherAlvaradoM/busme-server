import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('admin/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get()
   findAll(){
    return 'Get todos los usuarios'
  }

  @Get(':id')
  findOne(){
    return 'Get un usuario'
  }

  @Post()
  create(){
    return 'Post crear usuario'
  }

  @Delete(':id')
  delete(){
    return 'Delete usuario'
  }

  @Put(':id')
  update(){
    return 'Put actualizar usuario'
  }
}
