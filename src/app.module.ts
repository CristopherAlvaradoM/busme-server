import { Module } from '@nestjs/common';
import { AuthModule } from './admin/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { PasswordResetModule } from './admin/password_reset/password_reset.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development.local',
      isGlobal: true,
    }),
    AuthModule,
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
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
