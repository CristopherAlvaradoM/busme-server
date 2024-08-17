import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Query, UnauthorizedException } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CrearUsuarioDto } from 'src/dto/CrearUsuario.dto';
import { log } from 'console';

@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Post()
  async create(@Body() usuario: CrearUsuarioDto) {
      const newUser =  await this.adminService.createAdmin(usuario);
      if(!newUser) throw new BadRequestException({mensaje: 'Peticion invalida'})
      return newUser
  }

  @Get()
  async finAll() {
    return await this.adminService.findAll()
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string) {
    console.log(id);
    return await this.adminService.deleteOne(id)
  }

  @Get(':token')
  async hasAcces(@Query('token') token: string, @Query('route') route: string) {
    const access =  await this.adminService.hasAcces(token, route);
    if(!access) throw new UnauthorizedException({mensaje: 'No tienes acceso a esta ruta'})
    return true
  }

}
