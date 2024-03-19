import { Module } from '@nestjs/common';
import { PasswordResetController } from './password_reset.controller';
import { PasswordResetService } from './password_reset.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuario, UsuarioSchema } from 'src/schemas/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ schema: UsuarioSchema, name: Usuario.name }])],
  controllers: [PasswordResetController],
  providers: [PasswordResetService]
})
export class PasswordResetModule {}
