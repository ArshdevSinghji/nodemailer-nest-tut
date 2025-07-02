import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from './mail.provider';
import { MailDto } from './dto/mail.dto';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post()
  async sendMail(@Body() mailContent: MailDto) {
    return this.mailService.sendMail(mailContent);
  }
}
