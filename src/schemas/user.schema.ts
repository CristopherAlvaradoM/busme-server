import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Usuario {
  @Prop({ required: true, unique: true, trim: true })
  correo: string;

  @Prop({ required: true })
  contrasena: string;

  @Prop({ required: false })
  tokenResetPwd: string;

  @Prop(raw({
    nombres: { type: String, required: true },
    apellidoP: { type: String, required: true },
    apellidoM: { type: String }
  }))
  nombre: Record<string, any>;

  @Prop(raw({
    latitud: { type: String, required: true },
    longitud: { type: String, required: true }
  }))
  ubicacion: Record<string, any>;

  @Prop({ required: true })
  tipoUsuario: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);