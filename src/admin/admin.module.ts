import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { Usuario, UsuarioSchema } from 'src/schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Rol, RolSchema } from 'src/schemas/roles.schema';

@Module({
  imports:[MongooseModule.forFeature([{ schema: UsuarioSchema, name: Usuario.name }, {schema: RolSchema, name: Rol.name}])],
  providers: [AdminService],
  controllers: [AdminController]
})
export class AdminModule {}
