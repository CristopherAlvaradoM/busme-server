import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CrearUsuarioDto } from 'src/dto/CrearUsuario.dto';
import { Usuario } from 'src/schemas/user.schema';
import * as bcrypt from 'bcrypt'
import { Rol } from 'src/schemas/roles.schema';

@Injectable()
export class AdminService {
  constructor(@InjectModel(Usuario.name) private userModel: Model<Usuario>,
              @InjectModel(Rol.name) private rolModel: Model<Rol>) {}


  async createAdmin(usuario: CrearUsuarioDto): Promise<object> {
    const rol = await this.rolModel.findOne({nombre: usuario.tipoUsuario})
    if(!rol) return null
    const nuevoUsuario = new this.userModel(usuario);
    const salt = await bcrypt.genSalt(10)
    const encriptedPwd = await bcrypt.hash(nuevoUsuario.contrasena, salt)
    nuevoUsuario.contrasena = encriptedPwd
    return await nuevoUsuario.save();
  }

  async findAll(): Promise<Usuario[]> {
    return await this.userModel.find({tipoUsuario: 'admin'})
  }

  async deleteOne(id: string) {
    return await this.userModel.deleteOne({_id: id});
  }
}
