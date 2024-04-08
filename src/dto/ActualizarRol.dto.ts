import { IsArray, IsMongoId, IsNotEmpty, IsString } from "class-validator";

export class ActualizarRolDto {

  @IsMongoId()
  @IsNotEmpty()
  _id: string;
  
  @IsNotEmpty()
  @IsString()
  nombre?: string;

  @IsNotEmpty()
  @IsArray()
  acceso?: object[];
}