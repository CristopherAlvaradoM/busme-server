import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Nombre, Ubicacion } from 'src/utils/interfaces';

@Schema({ timestamps: true })
export class Usuario {
  @Prop({ required: true, unique: true, trim: true })
  correo: string;

  @Prop({ required: true })
  contrasena: string;

  @Prop({ required: true })
  nombre: Nombre;

  @Prop({})
  ubicacion: Ubicacion;

  @Prop({ required: true })
  tipoUsuario: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);