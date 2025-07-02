import { IsDateString, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class InterviewDto {
  @IsString()
  @IsNotEmpty()
  candidateName: string;

  @IsString()
  @IsNotEmpty()
  position: string;

  @IsString()
  @IsNotEmpty()
  companyName: string;

  @IsString()
  @IsNotEmpty()
  interviewType: string;

  @IsString()
  @IsNotEmpty()
  meetingLink: string;

  @IsString()
  @IsNotEmpty()
  interviewer: string;

  @IsString()
  @IsNotEmpty()
  recruiterName: string;

  @IsString()
  @IsNotEmpty()
  recruiterTitle: string;

  @IsString()
  @IsNotEmpty()
  recruiterEmail: string;

  @IsString()
  @IsNotEmpty()
  companyWebsite: string;
}
