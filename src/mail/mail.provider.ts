import { Injectable } from '@nestjs/common';
import { SentMessageInfo } from 'nodemailer';
import { BirthdayService } from 'src/birthday/birthday.provider';
import { BirthdayDto } from 'src/birthday/dto/bithday.dto';
import { InterviewDto } from 'src/interview/dto/interview.dto';
import { InterviewService } from 'src/interview/interview.provider';
import { InvitationDto } from 'src/invitation/dto/invitation.dto';
import { InvitationService } from 'src/invitation/invitatation.provider';

@Injectable()
export class MailService {
  constructor(
    private birthdayService: BirthdayService,
    private interviewService: InterviewService,
    private invitationService: InvitationService,
  ) {}

  async sendMail(
    type: 'bday' | 'interview' | 'invitation',
    mail: BirthdayDto | InterviewDto | InvitationDto,
  ) {
    switch (type) {
      case 'bday':
        return await this.birthdayService.sendMail(mail as BirthdayDto);
      case 'interview':
        return await this.interviewService.sendMail(mail as InterviewDto);
      case 'invitation':
        return await this.invitationService.sendMail(mail as InvitationDto);
    }
  }
}
