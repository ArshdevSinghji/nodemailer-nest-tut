import { Module } from '@nestjs/common';
import { MailModule } from './mail/mail.module';
import { configDotenv } from 'dotenv';
import { BirthdayModule } from './birthday/birthday.module';
import { InterviewModule } from './interview/interview.module';
import { InvitationModule } from './invitation/invitation.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

configDotenv();

@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        transport: {
          host: configService.get('EMAIL_HOST'),
          port: 587,
          secure: false,
          auth: {
            user: configService.get('EMAIL_USERNAME'),
            pass: configService.get('EMAIL_PASSWORD'),
          },
        },
        defaults: {
          from: `"Birthday Bot" <${configService.get('EMAIL_USERNAME')}>`,
        },
        preview: true,
        template: {
          dir: join(process.cwd(), 'src', 'templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService],
    }),
    MailModule,
    BirthdayModule,
    InterviewModule,
    InvitationModule,
  ],
})
export class AppModule {}
