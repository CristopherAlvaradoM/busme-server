import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario } from 'src/schemas/user.schema';
import * as jwt from 'jsonwebtoken';
import * as CryptoJS from 'crypto-js';
import * as bcrypt from 'bcrypt'
import { CrearUsuarioDto } from 'src/dto/CrearUsuario.dto';

@Injectable()
export class AuthService {
  constructor(@InjectModel(Usuario.name) private userModel: Model<Usuario>) {}

  async login(correo: string, contrasena: string): Promise<object> {
    const usuario = await this.userModel.findOne({ correo, tipoUsuario: "admin" });
    if (!usuario) return null
    const auth = await bcrypt.compare(contrasena, usuario.contrasena);
    if(!auth) return null
    const usuarioSerializado = JSON.stringify(usuario);
    const token = jwt.sign({usuario: usuarioSerializado}, process.env.JWT_SECRET_KEY);
    const tokenCifrado = CryptoJS.AES.encrypt(token, process.env.CRYPTO_SECRET_KEY).toString();
    return { token: tokenCifrado}
  }

  async createUser(usuario: CrearUsuarioDto): Promise<Usuario> {
    const nuevoUsuario = new this.userModel(usuario);
    const salt = await bcrypt.genSalt(10)
    const encriptedPwd = await bcrypt.hash(nuevoUsuario.contrasena, salt)
    nuevoUsuario.contrasena = encriptedPwd
    return await nuevoUsuario.save();
  }

}
