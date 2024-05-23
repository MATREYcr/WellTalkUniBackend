import { IsString, IsNotEmpty, IsOptional, IsDateString, IsInt } from 'class-validator';

export class UpdatePsychologistProfileDto {
    @IsOptional()
    @IsString({ message: 'Name must be a string' })
    @IsNotEmpty({ message: 'Name cannot be empty' })
    name?: string;

    @IsOptional()
    @IsString({ message: 'Last name must be a string' })
    @IsNotEmpty({ message: 'Last name cannot be empty' })
    lastName?: string;

    @IsOptional()
    @IsString({ message: 'Phone number must be a string' })
    @IsNotEmpty({ message: 'Phone number cannot be empty' })
    phoneNumber?: string;

    @IsOptional()
    @IsString({ message: 'Address must be a string' })
    @IsNotEmpty({ message: 'Address cannot be empty' })
    address?: string;

    @IsString({ message: 'City must be a string' })
    @IsNotEmpty({ message: 'City cannot be empty' })
    city?: string;
  
    @IsString({ message: 'Department must be a string' })
    @IsNotEmpty({ message: 'Department cannot be empty' })
    department?: string;
  
    @IsString({ message: 'University must be a string' })
    @IsNotEmpty({ message: 'University cannot be empty' })
    university?: string;
  
    @IsDateString()
    dateOfBirth?: Date;

    @IsString({ message: 'Specialty must be a string' })
    @IsNotEmpty({ message: 'Specialty cannot be empty' })
    specialty: string

    @IsInt({ message: 'Specialty must be a string' })
    @IsNotEmpty({ message: 'Specialty cannot be empty' })
    yearsExperience: number
}