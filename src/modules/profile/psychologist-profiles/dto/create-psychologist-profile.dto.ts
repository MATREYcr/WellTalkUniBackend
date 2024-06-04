import { IsString, IsNotEmpty, IsDateString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePsychologistProfileDto {
  @ApiProperty({
    example: 'John',
    description: 'The first name of the psychologist',
  })
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name cannot be empty' })
  name: string;

  @ApiProperty({
    example: 'Doe',
    description: 'The last name of the psychologist',
  })
  @IsString({ message: 'Last name must be a string' })
  @IsNotEmpty({ message: 'Last name cannot be empty' })
  lastName: string;

  @ApiProperty({
    example: '+123456789',
    description: 'The phone number of the psychologist',
  })
  @IsString({ message: 'Phone number must be a string' })
  @IsNotEmpty({ message: 'Phone number cannot be empty' })
  phoneNumber: string;

  @ApiProperty({
    example: '123 Main St',
    description: 'The address of the psychologist',
  })
  @IsString({ message: 'Address must be a string' })
  @IsNotEmpty({ message: 'Address cannot be empty' })
  address: string;

  @ApiProperty({
    example: 'New York',
    description: 'The city of the psychologist',
  })
  @IsString({ message: 'City must be a string' })
  @IsNotEmpty({ message: 'City cannot be empty' })
  city: string;

  @ApiProperty({
    example: 'NY',
    description: 'The department or state of the psychologist',
  })
  @IsString({ message: 'Department must be a string' })
  @IsNotEmpty({ message: 'Department cannot be empty' })
  department: string;

  @ApiProperty({
    example: 'Harvard University',
    description: 'The university the psychologist attended',
  })
  @IsString({ message: 'University must be a string' })
  @IsNotEmpty({ message: 'University cannot be empty' })
  university: string;

  @ApiProperty({
    example: '1980-01-01',
    description: 'The date of birth of the psychologist',
  })
  @IsDateString()
  dateOfBirth: Date;

  @ApiProperty({
    example: 'Clinical Psychology',
    description: 'The specialty of the psychologist',
  })
  @IsString({ message: 'Specialty must be a string' })
  @IsNotEmpty({ message: 'Specialty cannot be empty' })
  specialty: string;

  @ApiProperty({
    example: 10,
    description: 'The number of years of experience the psychologist has',
  })
  @IsInt({ message: 'Years of experience must be an integer' })
  @IsNotEmpty({ message: 'Years of experience cannot be empty' })
  yearsExperience: number;
}
