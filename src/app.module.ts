import { Module } from '@nestjs/common';
import { AuthModule } from './admin/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development.local',
      isGlobal: true,
    }),
    AuthModule,
    MongooseModule.forRoot(process.env.MONGODBA_ACCES_URL),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
