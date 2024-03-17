export interface CrearUsuario {
  correo: string;
  contrasena: string;
  nombre: {
    nombres: string,
    apellidoP: string,
    apellidoM?: string
  },
  ubicacion?: {
    latitud: string,
    longitud: string
  },
  tipoUsuario: string

}