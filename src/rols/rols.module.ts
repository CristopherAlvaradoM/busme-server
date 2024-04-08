import { Module } from '@nestjs/common';
import { RolsService } from './rols.service';
import { RolsController } from './rols.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Rol, RolSchema } from 'src/schemas/roles.schema';

@Module({
  imports: [MongooseModule.forFeature([{ schema: RolSchema, name: Rol.name}])],
  providers: [RolsService],
  controllers: [RolsController]
})
export class RolsModule {}
