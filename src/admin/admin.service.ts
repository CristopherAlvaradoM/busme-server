import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CrearUsuarioDto } from 'src/dto/CrearUsuario.dto';
import { Usuario } from 'src/schemas/user.schema';
import * as bcrypt from 'bcrypt';
import * as CryptoJS from 'crypto-js';
import * as jwt from 'jsonwebtoken';
import { Rol } from 'src/schemas/roles.schema';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Usuario.name) private userModel: Model<Usuario>,
    @InjectModel(Rol.name) private rolModel: Model<Rol>,
  ) {}

  async createAdmin(usuario: CrearUsuarioDto): Promise<object> {
    const rol = await this.rolModel.findOne({ nombre: usuario.tipoUsuario });
    if (!rol) return null;
    const nuevoUsuario = new this.userModel(usuario);
    const salt = await bcrypt.genSalt(10);
    const encriptedPwd = await bcrypt.hash(nuevoUsuario.contrasena, salt);
    nuevoUsuario.contrasena = encriptedPwd;
    return await nuevoUsuario.save();
  }

  async findAll(): Promise<Usuario[]> {
    return await this.userModel.find({
      $or: [
        { tipoUsuario: 'Superadministrador' },
        { tipoUsuario: 'Administrador' },
        { tipoUsuario: 'Calidad' },
      ],
    });
  }

  async deleteOne(id: string) {
    return await this.userModel.deleteOne({ _id: id });
  }

  async hasAcces(token: string, route: string) {
    const decryptedToken = CryptoJS.AES.decrypt(token, process.env.CRYPTO_SECRET_KEY).toString(CryptoJS.enc.Utf8);
    const user = jwt.verify(decryptedToken, process.env.JWT_SECRET_KEY) as { usuario: CrearUsuarioDto };
    if(route === 'superadmin' && user.usuario.tipoUsuario === 'Superadministrador') return true;
    if(route === 'admin' && user.usuario.tipoUsuario === 'Administrador') return true;
    if(route === 'calidad' && user.usuario.tipoUsuario === 'Calidad') return true;
    return false
  }
}
