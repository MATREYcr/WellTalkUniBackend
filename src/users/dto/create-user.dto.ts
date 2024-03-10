// create-user.dto.ts

import { IsString, IsEnum, IsNotEmpty, IsEmail } from 'class-validator';
import { StudentProfile } from 'src/student-profiles/entities/student-profile.entity';
import { PsychologistProfile } from '../../psychologist-profiles/entities/psychologist-profile.entity';

export enum userType {
  STUDENT = 'STUDENT',
  PSYCHOLOGIST = 'PSYCHOLOGIST',
}
export class CreateUserDto {
  @IsEmail({}, { message: 'Invalid email format' })
  @IsNotEmpty({ message: 'Email cannot be empty' })
  readonly email: string;

  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password cannot be empty' })
  readonly password: string;

  @IsEnum(userType, { message: 'Invalid user type' })
  @IsNotEmpty({ message: 'User type cannot be empty' })
  readonly userType: userType;

  readonly studentProfile?: StudentProfile;

  readonly psychologistProfile?: PsychologistProfile;

}