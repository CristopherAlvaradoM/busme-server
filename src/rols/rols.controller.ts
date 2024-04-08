import { Body, Controller, Post } from '@nestjs/common';
import { RolsService } from './rols.service';
import { CrearRolDto } from 'src/dto/CrearRol.dto';

@Controller('rols')
export class RolsController {
  constructor(private rolsService: RolsService) {}

  @Post()
  async create(@Body() rol: CrearRolDto) {
    return await this.rolsService.create(rol);
  }
}
