import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { InvitationDto } from './dto/invitation.dto';

@Injectable()
export class InvitationService {
  constructor(private readonly mailerService: MailerService) {}
  async sendMail(invitation: InvitationDto) {
    return await this.mailerService.sendMail({
      from: process.env.EMAIL_USERNAME,
      to: 'arshdevrajput20@gmail.com',
      subject: `🎉 You're Invited to ${invitation.eventName}!`,
      template: './invitation',
      context: {
        guestName: invitation.guestName,
        eventName: invitation.eventName,
        eventDate: invitation.eventDate,
        eventTime: invitation.eventTime,
        venue: invitation.venue,
        address: invitation.address,
        duration: invitation.duration,
        theme: invitation.theme,
        dressCode: invitation.dressCode,
        activities: invitation.activities,
        specialInstructions: invitation.specialInstructions,
        countdown: invitation.countdown,
        rsvpDeadline: invitation.rsvpDeadline,
        rsvpLink: invitation.rsvpLink,
        hostName: invitation.hostName,
        hostContact: invitation.hostContact,
        hostEmail: invitation.hostEmail,
        additionalInfo: invitation.additionalInfo,
      },
    });
  }
}
