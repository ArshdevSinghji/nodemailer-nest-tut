import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { InterviewDto } from './dto/interview.dto';

@Injectable()
export class InterviewService {
  constructor(private readonly mailerService: MailerService) {}

  async sendMail(interview: InterviewDto) {
    return this.mailerService.sendMail({
      from: process.env.EMAIL_USERNAME,
      to: 'arshdevrajput20@gmail.com',
      template: './interview',
      subject: 'Congratulations on being selected for interview!',
      context: {
        candidateName: interview.candidateName,
        position: interview.position,
        companyName: interview.companyName,
        interviewType: interview.interviewType,
        meetingLink: interview.meetingLink,
        interviewer: interview.interviewer,
        recruiterName: interview.recruiterName,
        recruiterTitle: interview.recruiterTitle,
        recruiterEmail: interview.recruiterEmail,
        companyWebsite: interview.companyWebsite,
      },
    });
  }
}
