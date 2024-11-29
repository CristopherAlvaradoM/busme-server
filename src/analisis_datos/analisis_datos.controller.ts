import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { AnalisisDatosService } from './analisis_datos.service';
import { CreateAnalisisDatoDto } from './dto/create-analisis_dato.dto';
import { UpdateAnalisisDatoDto } from './dto/update-analisis_dato.dto';
import { Response } from 'express';

@Controller('analisis-datos')
export class AnalisisDatosController {
  constructor(private readonly analisisDatosService: AnalisisDatosService) {}

  @Post()
  create(@Body() createAnalisisDatoDto: CreateAnalisisDatoDto) {
    return this.analisisDatosService.create(createAnalisisDatoDto);
  }

  @Get()
  async findAll(@Res() res: Response) {
    console.log("entro");
    const graph = await this.analisisDatosService.findAll();
    res.setHeader('Content-Type', 'image/png');
    return graph;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.analisisDatosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnalisisDatoDto: UpdateAnalisisDatoDto) {
    return this.analisisDatosService.update(+id, updateAnalisisDatoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.analisisDatosService.remove(+id);
  }
}
