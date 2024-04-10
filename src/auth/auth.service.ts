import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario } from 'src/schemas/user.schema';
import * as jwt from 'jsonwebtoken';
import * as CryptoJS from 'crypto-js';
import * as bcrypt from 'bcrypt'
import { Rol } from 'src/schemas/roles.schema';
@Injectable()
export class AuthService {
  constructor(@InjectModel(Usuario.name) private userModel: Model<Usuario>,
              @InjectModel(Rol.name) private rolModel: Model<Rol>) {}

  async login(correo: string, contrasena: string): Promise<object> {
    const usuario = await this.userModel.findOne({ correo });
    if (!usuario) return null
    const auth = await bcrypt.compare(contrasena, usuario.contrasena);
    if(!auth) return null
    const roles = await this.rolModel.find();
    const userRolAuth = roles.find(rol => rol.nombre === usuario.tipoUsuario);
    if(!userRolAuth) return null
    const token = jwt.sign({ usuario }, process.env.JWT_SECRET_KEY);
    const tokenCifrado = CryptoJS.AES.encrypt(token, process.env.CRYPTO_SECRET_KEY).toString();
    return { token: tokenCifrado, rol: usuario.tipoUsuario}
  }
}
