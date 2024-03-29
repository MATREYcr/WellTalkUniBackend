import { IsString, IsInt, MinLength, MaxLength, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateStudentProfileDto {
  @IsString({ message: 'Name must be a string' })
  @MinLength(2, { message: 'Name is too short' })
  @MaxLength(50, { message: 'Name is too long' })
  @IsNotEmpty({ message: 'Name cannot be empty' })
  readonly name: string;

  @IsString({ message: 'Last name must be a string' })
  @MinLength(2, { message: 'Last name is too short' })
  @MaxLength(50, { message: 'Last name is too long' })
  @IsNotEmpty({ message: 'Last name cannot be empty' })
  readonly lastName: string;

  @IsString({ message: 'Career must be a string' })
  @MinLength(2, { message: 'Career is too short' })
  @MaxLength(50, { message: 'Career is too long' })
  @IsNotEmpty({ message: 'Career cannot be empty' })
  readonly career: string;

  @IsInt({ message: 'Semester must be an integer' })
  @IsNotEmpty({ message: 'Semester cannot be empty' })
  readonly semester: number;

  @IsString({ message: 'Phone number must be a string' })
  @MinLength(10, { message: 'Phone number is too short' })
  @MaxLength(15, { message: 'Phone number is too long' })
  @IsNotEmpty({ message: 'Phone number cannot be empty' })
  readonly phoneNumber: string;

  @IsString({ message: 'Address must be a string' })
  @MinLength(5, { message: 'Address is too short' })
  @MaxLength(100, { message: 'Address is too long' })
  @IsNotEmpty({ message: 'Address cannot be empty' })
  readonly address: string;

  @IsString({ message: 'City must be a string' })
  @IsNotEmpty({ message: 'City cannot be empty' })
  readonly city: string;

  @IsString({ message: 'Department must be a string' })
  @IsNotEmpty({ message: 'Department cannot be empty' })
  readonly department: string;

  @IsString({ message: 'University must be a string' })
  @IsNotEmpty({ message: 'University cannot be empty' })
  readonly university: string;

  @IsDateString()
  readonly dateOfBirth: Date;
}
