import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class BirthdayDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
