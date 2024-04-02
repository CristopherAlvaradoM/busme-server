import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ timestamps: true })
export class Rol {
  @Prop({ required: true, unique: true, trim: true })
  nombre: string;

  @Prop({ required: true })
  acceso: object[];
}

export const RolSchema = SchemaFactory.createForClass(Rol);