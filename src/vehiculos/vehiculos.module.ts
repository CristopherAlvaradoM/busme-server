import { Module } from '@nestjs/common';
import { VehiculosService } from './vehiculos.service';
import { VehiculosController } from './vehiculos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Vehiculos, VehiculoSchema } from 'src/schemas/vehiculo.schema';

@Module({
  controllers: [VehiculosController],
  providers: [VehiculosService],
  imports: [MongooseModule.forFeature([{ schema: VehiculoSchema,  name: Vehiculos.name}])]
})
export class VehiculosModule {}
