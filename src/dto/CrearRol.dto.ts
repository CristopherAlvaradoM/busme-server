import { IsArray, IsNotEmpty, IsString } from "class-validator";

export class CrearRolDto {
  
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsArray()
  acceso: object[];
}