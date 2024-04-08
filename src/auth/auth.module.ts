import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuario, UsuarioSchema } from 'src/schemas/user.schema';
import { Rol, RolSchema } from 'src/schemas/roles.schema';

@Module({
  imports: [MongooseModule.forFeature([{ schema: UsuarioSchema, name: Usuario.name }, {schema: RolSchema, name: Rol.name}])],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
