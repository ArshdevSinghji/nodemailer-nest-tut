import { Module } from '@nestjs/common';
import { InterviewService } from './interview.provider';

@Module({
  providers: [InterviewService],
  exports: [InterviewService],
})
export class InterviewModule {}
