import { Module } from '@nestjs/common';
import { InvitationService } from './invitatation.provider';

@Module({
  providers: [InvitationService],
  exports: [InvitationService],
})
export class InvitationModule {}
