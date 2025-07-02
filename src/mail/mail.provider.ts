import { Injectable } from '@nestjs/common';
import { MailDto } from './dto/mail.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private readonly mailServive: MailerService) {}

  async sendMail(mailContent: MailDto) {
    return this.mailServive.sendMail({
      from: `Arshdev Singh <arshdevrajput@gmail.com>`,
      to: 'arshdevrajput20@gmail.com',
      subject: 'How to Send Emails with Nodemailer!',
      text: mailContent.content,
    });
  }
}
