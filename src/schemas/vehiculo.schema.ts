import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Vehiculos {

  @Prop(raw({
    latitud: { type: String },
    longitud: { type: String }
  }))
  ubicacion: Record<string, any>;

  @Prop()
  capacidadTotal: number

  @Prop()
  capacidadActual: number;

}

export const VehiculoSchema = SchemaFactory.createForClass(Vehiculos)