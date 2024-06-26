import { IsString, IsInt, MinLength, MaxLength, IsNotEmpty, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentProfileDto {
  @ApiProperty({
    example: 'John',
    description: 'The first name of the student',
  })
  @IsString({ message: 'Name must be a string' })
  @MinLength(2, { message: 'Name is too short' })
  @MaxLength(50, { message: 'Name is too long' })
  @IsNotEmpty({ message: 'Name cannot be empty' })
  readonly name: string;

  @ApiProperty({
    example: 'Doe',
    description: 'The last name of the student',
  })
  @IsString({ message: 'Last name must be a string' })
  @MinLength(2, { message: 'Last name is too short' })
  @MaxLength(50, { message: 'Last name is too long' })
  @IsNotEmpty({ message: 'Last name cannot be empty' })
  readonly lastName: string;

  @ApiProperty({
    example: 'Computer Science',
    description: 'The career of the student',
  })
  @IsString({ message: 'Career must be a string' })
  @MinLength(2, { message: 'Career is too short' })
  @MaxLength(50, { message: 'Career is too long' })
  @IsNotEmpty({ message: 'Career cannot be empty' })
  readonly career: string;

  @ApiProperty({
    example: 4,
    description: 'The semester of the student',
  })
  @IsInt({ message: 'Semester must be an integer' })
  @IsNotEmpty({ message: 'Semester cannot be empty' })
  readonly semester: number;

  @ApiProperty({
    example: '+123456789',
    description: 'The phone number of the student',
  })
  @IsString({ message: 'Phone number must be a string' })
  @MinLength(10, { message: 'Phone number is too short' })
  @MaxLength(15, { message: 'Phone number is too long' })
  @IsNotEmpty({ message: 'Phone number cannot be empty' })
  readonly phoneNumber: string;

  @ApiProperty({
    example: '123 Main St',
    description: 'The address of the student',
  })
  @IsString({ message: 'Address must be a string' })
  @MinLength(5, { message: 'Address is too short' })
  @MaxLength(100, { message: 'Address is too long' })
  @IsNotEmpty({ message: 'Address cannot be empty' })
  readonly address: string;

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
