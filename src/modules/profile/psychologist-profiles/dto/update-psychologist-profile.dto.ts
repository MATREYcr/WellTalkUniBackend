import { IsString, IsNotEmpty, IsOptional, IsDateString, IsInt } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UpdatePsychologistProfileDto {
  @ApiPropertyOptional({
    example: 'John',
    description: 'The first name of the psychologist',
  })
  @IsOptional()
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name cannot be empty' })
  name?: string;

  @ApiPropertyOptional({
    example: 'Doe',
    description: 'The last name of the psychologist',
  })
  @IsOptional()
  @IsString({ message: 'Last name must be a string' })
  @IsNotEmpty({ message: 'Last name cannot be empty' })
  lastName?: string;

  @ApiPropertyOptional({
    example: '+123456789',
    description: 'The phone number of the psychologist',
  })
  @IsOptional()
  @IsString({ message: 'Phone number must be a string' })
  @IsNotEmpty({ message: 'Phone number cannot be empty' })
  phoneNumber?: string;

  @ApiPropertyOptional({
    example: '123 Main St',
    description: 'The address of the psychologist',
  })
  @IsOptional()
  @IsString({ message: 'Address must be a string' })
  @IsNotEmpty({ message: 'Address cannot be empty' })
  address?: string;

  @ApiPropertyOptional({
    example: 'New York',
    description: 'The city of the psychologist',
  })
  @IsOptional()
  @IsString({ message: 'City must be a string' })
  @IsNotEmpty({ message: 'City cannot be empty' })
  city?: string;

  @ApiPropertyOptional({
    example: 'NY',
    description: 'The department or state of the psychologist',
  })
  @IsOptional()
  @IsString({ message: 'Department must be a string' })
  @IsNotEmpty({ message: 'Department cannot be empty' })
  department?: string;

  @ApiPropertyOptional({
    example: 'Harvard University',
    description: 'The university the psychologist attended',
  })
  @IsOptional()
  @IsString({ message: 'University must be a string' })
  @IsNotEmpty({ message: 'University cannot be empty' })
  university?: string;

  @ApiPropertyOptional({
    example: '1980-01-01',
    description: 'The date of birth of the psychologist',
  })
  @IsOptional()
  @IsDateString()
  dateOfBirth?: Date;

  @ApiPropertyOptional({
    example: 'Clinical Psychology',
    description: 'The specialty of the psychologist',
  })
  @IsOptional()
  @IsString({ message: 'Specialty must be a string' })
  @IsNotEmpty({ message: 'Specialty cannot be empty' })
  specialty?: string;

  @ApiPropertyOptional({
    example: 10,
    description: 'The number of years of experience the psychologist has',
  })
  @IsOptional()
  @IsInt({ message: 'Years of experience must be an integer' })
  @IsNotEmpty({ message: 'Years of experience cannot be empty' })
  yearsExperience?: number;
}
