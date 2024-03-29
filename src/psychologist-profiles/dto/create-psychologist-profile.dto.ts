import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class CreatePsychologistProfileDto {
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name cannot be empty' })
  name: string;

  @IsString({ message: 'Last name must be a string' })
  @IsNotEmpty({ message: 'Last name cannot be empty' })
  lastName: string;

  @IsString({ message: 'Phone number must be a string' })
  @IsNotEmpty({ message: 'Phone number cannot be empty' })
  phoneNumber: string;

  @IsString({ message: 'Address must be a string' })
  @IsNotEmpty({ message: 'Address cannot be empty' })
  address: string;

  @IsString({ message: 'City must be a string' })
  @IsNotEmpty({ message: 'City cannot be empty' })
  city: string;

  @IsString({ message: 'Department must be a string' })
  @IsNotEmpty({ message: 'Department cannot be empty' })
  department: string;

  @IsString({ message: 'University must be a string' })
  @IsNotEmpty({ message: 'University cannot be empty' })
  university: string;

  @IsDateString()
  dateOfBirth: Date;
}
