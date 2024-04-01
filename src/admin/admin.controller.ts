import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CrearUsuarioDto } from 'src/dto/CrearUsuario.dto';

@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Post()
  async create(@Body() usuario: CrearUsuarioDto) {
      const newUser =  this.adminService.createAdmin(usuario);
      if(!newUser) throw new BadRequestException({mensaje: 'Peticion invalida'})
      return newUser
  }

  @Get()
  async finAll() {
    return await this.adminService.findAll()
  }
}
