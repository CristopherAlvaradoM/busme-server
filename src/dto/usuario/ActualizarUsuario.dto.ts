export interface ActualizarUsuario {
  correo?: string;
  contrasena?: string;
  nombre?: {
    nombres?: string,
    apellidoP?: string,
    apellidoM?: string
  };
  ubicacion?: {
    latitud?: string,
    longitud?: string
  };
}