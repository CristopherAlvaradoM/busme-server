import { Module } from '@nestjs/common';
import { VerifyService } from './verify.service';
import { VerifyController } from './verify.controller';
import { Usuario, UsuarioSchema } from 'src/schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ schema: UsuarioSchema, name: Usuario.name }])],
  providers: [VerifyService],
  controllers: [VerifyController]
})
export class VerifyModule {}
