import { Injectable } from '@nestjs/common';
import { BirthdayService } from 'src/birthday/birthday.provider';
import { InterviewService } from 'src/interview/interview.provider';
import { InvitationService } from 'src/invitation/invitatation.provider';

@Injectable()
export class MailService {
  constructor(
    private birthdayService: BirthdayService,
    private interviewService: InterviewService,
    private invitationService: InvitationService,
  ) {}

  async sendMail(type: string, mail) {
    switch (type) {
      case 'bday':
        return await this.birthdayService.sendMail(mail);
      case 'interview':
        return await this.interviewService.sendMail(mail);
      case 'invitation':
        return await this.invitationService.sendMail(mail);
    }
  }
}
