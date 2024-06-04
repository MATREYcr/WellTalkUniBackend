import { IsString, IsInt, MinLength, MaxLength, IsOptional, IsNotEmpty, IsDateString } from 'class-validator';
import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';

export class UpdateStudentProfileDto {
  @ApiPropertyOptional({
    example: 'John',
    description: 'The first name of the student',
  })
  @IsOptional()
  @IsString({ message: 'Name must be a string' })
  @MinLength(2, { message: 'Name is too short' })
  @MaxLength(50, { message: 'Name is too long' })
  readonly name?: string;

  @ApiPropertyOptional({
    example: 'Doe',
    description: 'The last name of the student',
  })
  @IsOptional()
  @IsString({ message: 'Last name must be a string' })
  @MinLength(2, { message: 'Last name is too short' })
  @MaxLength(50, { message: 'Last name is too long' })
  readonly lastName?: string;

  @ApiPropertyOptional({
    example: 'Computer Science',
    description: 'The career of the student',
  })
  @IsOptional()
  @IsString({ message: 'Career must be a string' })
  @MinLength(2, { message: 'Career is too short' })
  @MaxLength(50, { message: 'Career is too long' })
  readonly career?: string;

  @ApiPropertyOptional({
    example: 4,
    description: 'The semester of the student',
  })
  @IsOptional()
  @IsInt({ message: 'Semester must be an integer' })
  readonly semester?: number;

  @ApiPropertyOptional({
    example: '+123456789',
    description: 'The phone number of the student',
  })
  @IsOptional()
  @IsString({ message: 'Phone number must be a string' })
  @MinLength(10, { message: 'Phone number is too short' })
  @MaxLength(15, { message: 'Phone number is too long' })
  readonly phoneNumber?: string;

  @ApiPropertyOptional({
    example: '123 Main St',
    description: 'The address of the student',
  })
  @IsOptional()
  @IsString({ message: 'Address must be a string' })
  @MinLength(5, { message: 'Address is too short' })
  @MaxLength(100, { message: 'Address is too long' })
  readonly address?: string;

  @ApiProperty({
    example: 'New York',
    description: 'The city of the student',
  })
  @IsString({ message: 'City must be a string' })
  @IsNotEmpty({ message: 'City cannot be empty' })
  readonly city: string;

  @ApiProperty({
    example: 'NY',
    description: 'The department or state of the student',
  })
  @IsString({ message: 'Department must be a string' })
  @IsNotEmpty({ message: 'Department cannot be empty' })
  readonly department: string;

  @ApiProperty({
    example: 'Harvard University',
    description: 'The university the student attends',
  })
  @IsString({ message: 'University must be a string' })
  @IsNotEmpty({ message: 'University cannot be empty' })
  readonly university: string;

  @ApiProperty({
    example: '1999-01-01',
    description: 'The date of birth of the student',
  })
  @IsDateString()
  readonly dateOfBirth: Date;
}
