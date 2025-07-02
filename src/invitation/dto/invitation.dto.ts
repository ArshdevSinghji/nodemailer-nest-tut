import {
  IsString,
  IsEmail,
  IsOptional,
  IsArray,
  IsNumber,
} from 'class-validator';

export class InvitationDto {
  @IsString()
  guestName: string;

  @IsString()
  eventName: string;

  @IsString()
  eventDate: string;

  @IsString()
  eventTime: string;

  @IsString()
  venue: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  duration?: string;

  @IsOptional()
  @IsString()
  theme?: string;

  @IsOptional()
  @IsString()
  dressCode?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  activities?: string[];

  @IsOptional()
  @IsString()
  specialInstructions?: string;

  @IsOptional()
  @IsNumber()
  countdown?: number;

  @IsString()
  rsvpDeadline: string;

  @IsOptional()
  @IsString()
  rsvpLink?: string;

  @IsString()
  hostName: string;

  @IsString()
  hostContact: string;

  @IsOptional()
  @IsEmail()
  hostEmail?: string;

  @IsOptional()
  @IsString()
  additionalInfo?: string;
}
