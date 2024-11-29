import { Module } from '@nestjs/common';
import { AnalisisDatosService } from './analisis_datos.service';
import { AnalisisDatosController } from './analisis_datos.controller';

@Module({
  controllers: [AnalisisDatosController],
  providers: [AnalisisDatosService],
})
export class AnalisisDatosModule {}
