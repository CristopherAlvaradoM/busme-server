import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario } from 'src/schemas/user.schema';
import { CrearUsuario } from 'src/dto/usuario/CrearUsuario.dto';
import { ActualizarUsuario } from 'src/dto/usuario/ActualizarUsuario.dto';

@Injectable()
export class AuthService {
  constructor(@InjectModel(Usuario.name) private userModel: Model<Usuario>) {}

  async findAll() {
    return await this.userModel.find();
  }

  async findOne(id: string) {
    return await this.userModel.findById(id);
  }

  async create(user: CrearUsuario) {
    return await this.userModel.create(user);
  }

  async update(id: string, user: ActualizarUsuario) {
    return await this.userModel.findByIdAndUpdate(id, user, { new: true });
  }
}
