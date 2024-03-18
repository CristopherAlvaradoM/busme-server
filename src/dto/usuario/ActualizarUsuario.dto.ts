import { IsEmail, IsOptional } from 'class-validator'

export class ActualizarUsuario {
  @IsOptional()
  @IsEmail()
  correo?: string;

  @IsOptional()
  nombre?: {
    nombres?: string,
    apellidoP?: string,
    apellidoM?: string
  };

  @IsOptional()
  ubicacion?: {
    latitud?: string,
    longitud?: string
  };
}