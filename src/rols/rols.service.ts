import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CrearRolDto } from 'src/dto/CrearRol.dto';
import { Rol } from 'src/schemas/roles.schema';

@Injectable()
export class RolsService {
  constructor(@InjectModel(Rol.name) private rolModel: Model<Rol>) {}

  async create(rol: CrearRolDto): Promise<object> {
    const newRol = new this.rolModel(rol);
    return await newRol.save();
  }
}
