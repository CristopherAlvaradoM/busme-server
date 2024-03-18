import { IsString, IsOptional, IsNotEmpty, IsEmail } from 'class-validator';

export class CrearUsuario {
  @IsEmail()
  @IsNotEmpty()
  correo: string;

  @IsString()
  @IsNotEmpty()
  contrasena: string;

  @IsNotEmpty()
  nombre: {
    nombres: string,
    apellidoP: string,
    apellidoM?: string
  };

  @IsOptional()
  ubicacion?: {
    latitud: string,
    longitud: string
  };

  @IsString()
  @IsNotEmpty()
  tipoUsuario: string

}