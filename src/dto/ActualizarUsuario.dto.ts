import { IsAlphanumeric, IsEmail, IsMongoId, IsNotEmpty } from "class-validator";
import { Nombre, Ubicacion } from "src/utils/interfaces";


export class ActualizarUsuarioDto {
    @IsMongoId()
    @IsNotEmpty()
    _id: string;

    @IsEmail()
    correo?: string;

    @IsAlphanumeric()
    contrasena?: string;

    @IsAlphanumeric()
    tokenResetPwd?: string;

    nombre?: Nombre
    ubicacion?: Ubicacion
}