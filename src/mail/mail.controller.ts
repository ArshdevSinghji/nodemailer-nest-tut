import { Body, Controller, Param, Post } from '@nestjs/common';
import { MailService } from './mail.provider';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post(':type')
  async sendMail<T>(@Param('type') type: string, @Body() mail: T) {
    return this.mailService.sendMail(type, mail);
  }
}
