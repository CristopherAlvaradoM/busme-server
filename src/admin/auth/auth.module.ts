import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuario } from 'src/schemas/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ schema: Usuario, name: Usuario.name }])],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
