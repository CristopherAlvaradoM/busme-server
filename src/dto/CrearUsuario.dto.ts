import { IsEmail, IsNotEmpty, IsString, isNotEmpty } from "class-validator";
import { Nombre, Ubicacion } from "src/utils/interfaces";


export class CrearUsuarioDto {
  @IsEmail()
  @IsNotEmpty()
  correo: string;

  @IsString()
  @IsNotEmpty()
  contrasena: string;

  @IsNotEmpty()
  nombre: Nombre;

  ubicacion: Ubicacion;

  @IsString()
  @IsNotEmpty()
  tipoUsuario: string;

  @IsString()
  @IsNotEmpty()
  telefono: string;
}