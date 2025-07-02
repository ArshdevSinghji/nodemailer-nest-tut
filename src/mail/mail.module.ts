import { Module } from '@nestjs/common';
import { MailController } from './mail.controller';
import { MailService } from './mail.provider';
import { InvitationModule } from 'src/invitation/invitation.module';
import { InterviewModule } from 'src/interview/interview.module';
import { BirthdayModule } from 'src/birthday/birthday.module';

@Module({
  imports: [InvitationModule, InterviewModule, BirthdayModule],
  controllers: [MailController],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
