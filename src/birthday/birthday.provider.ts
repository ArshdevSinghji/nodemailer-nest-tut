import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { BirthdayDto } from './dto/bithday.dto';

@Injectable()
export class BirthdayService {
  constructor(private mailerService: MailerService) {}
  async sendMail(bDay: BirthdayDto) {
    return this.mailerService.sendMail({
      from: process.env.EMAIL_USERNAME,
      to: process.env.EMAIL_TO,
      subject: 'Happy Birthday!',
      template: './birthday',
      context: {
        name: bDay.name,
        from: process.env.EMAIL_USERNAME,
      },
    });
  }
}
