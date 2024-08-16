import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';
import { Injectable } from '@nestjs/common';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vehiculos } from 'src/schemas/vehiculo.schema';

@Injectable()
export class VehiculosService {
  constructor(@InjectModel(Vehiculos.name) private vehiculoModel: Model<Vehiculos>) {}
  create(createVehiculoDto: CreateVehiculoDto) {
    const newVehicle = new this.vehiculoModel({ubicacion: createVehiculoDto.ubicacion, capacidadTotal: createVehiculoDto.capacidadTotal})
    return newVehicle.save()
  }

  findAll() {
    return this.vehiculoModel.find();
  }

  findOne(id: string) {
    return this.vehiculoModel.findById(id);
  }

  async update(id: string, updateVehiculoDto: UpdateVehiculoDto) {
    console.log(updateVehiculoDto)
    if(updateVehiculoDto.capacidadActual){
      const vehicle = await this.vehiculoModel.findOne({_id: id})
      vehicle.capacidadActual = updateVehiculoDto.capacidadActual || vehicle.capacidadActual
      vehicle.ubicacion = updateVehiculoDto.ubicacion || vehicle.ubicacion
      return vehicle.save()

    }
    return await this.vehiculoModel.findByIdAndUpdate(id, {$set: {ubicacion: updateVehiculoDto.ubicacion}})
  }

  remove(id: string) {
    return this.vehiculoModel.findByIdAndDelete(id);
  }
}
