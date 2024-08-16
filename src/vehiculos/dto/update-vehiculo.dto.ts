import { PartialType } from '@nestjs/mapped-types';
import { CreateVehiculoDto } from './create-vehiculo.dto';
import { Ubicacion } from 'src/utils/interfaces';

export class UpdateVehiculoDto extends PartialType(CreateVehiculoDto) {

  _id: string

  ubicacion?: Ubicacion

  capacidadTotal?: number

  capacidadActual?: number

}
