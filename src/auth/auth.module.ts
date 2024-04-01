import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuario, UsuarioSchema } from 'src/schemas/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ schema: UsuarioSchema, name: Usuario.name }])],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
