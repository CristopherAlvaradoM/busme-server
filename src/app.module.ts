import { Module } from '@nestjs/common';
import { AuthModule } from './admin/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [AuthModule, MongooseModule.forRoot('mongodb+srv://YahirMombela:12345@cluster0.ufgdymg.mongodb.net/Busme?retryWrites=true&w=majority')],
  controllers: [],
  providers: [],
})
export class AppModule {}
