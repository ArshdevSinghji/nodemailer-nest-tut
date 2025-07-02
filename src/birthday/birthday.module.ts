import { Module } from '@nestjs/common';
import { BirthdayService } from './birthday.provider';

@Module({
  providers: [BirthdayService],
  exports: [BirthdayService],
})
export class BirthdayModule {}
