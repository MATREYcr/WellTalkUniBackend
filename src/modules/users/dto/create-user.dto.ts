import { IsString, IsEnum, IsNotEmpty, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { StudentProfile } from 'src/modules/profile/student-profiles/entities/student-profile.entity';
import { PsychologistProfile } from '../../profile/psychologist-profiles/entities/psychologist-profile.entity';

export enum userType {
  STUDENT = 'STUDENT',
  PSYCHOLOGIST = 'PSYCHOLOGIST',
}

export class CreateUserDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'The email address of the user',
  })
  @IsEmail({}, { message: 'Invalid email format' })
  @IsNotEmpty({ message: 'Email cannot be empty' })
  readonly email: string;

  @ApiProperty({
    example: 'strongPassword123',
    description: 'The password of the user',
  })
  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password cannot be empty' })
  readonly password: string;

  @ApiProperty({
    example: userType.STUDENT,
    enum: userType,
    description: 'The type of user (STUDENT or PSYCHOLOGIST)',
  })
  @IsEnum(userType, { message: 'Invalid user type' })
  @IsNotEmpty({ message: 'User type cannot be empty' })
  readonly userType: userType;

  @ApiProperty({
    description: 'The student profile associated with the user',
    type: () => StudentProfile,
    nullable: true,
  })
  readonly studentProfile?: StudentProfile;

  @ApiProperty({
    description: 'The psychologist profile associated with the user',
    type: () => PsychologistProfile,
    nullable: true,
  })
  readonly psychologistProfile?: PsychologistProfile;
}
