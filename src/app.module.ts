import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { PasswordResetModule } from './password_reset/password_reset.module';
import { AdminModule } from './admin/admin.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { RolsModule } from './rols/rols.module';
import { VerifyModule } from './verify/verify.module';
import { CoordinatesGateway } from './websocket/gateway';
import { VehiculosModule } from './vehiculos/vehiculos.module';
import { AnalisisDatosModule } from './analisis_datos/analisis_datos.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development.local',
      isGlobal: true,
    }),
    AdminModule,
    AuthModule,
    VehiculosModule,
    PasswordResetModule,
    MongooseModule.forRoot(process.env.MONGODBA_ACCES_URL),
    MailerModule.forRoot({
      transport: {
        host:  process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: false,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false
        }
      },
      defaults: {
        from: "'No Reply' <busmetest@gmail.com>"
      },
    }),
    RolsModule,
    VerifyModule,
    VehiculosModule,
    VehiculosModule,
    AnalisisDatosModule
  ],
  controllers: [],
  providers: [CoordinatesGateway],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(LoggerMiddleware)
    .exclude('login', 'password-reset')
    .forRoutes('admin')
  }
}
