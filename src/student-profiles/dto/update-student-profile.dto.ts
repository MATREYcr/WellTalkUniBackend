import { IsString, IsInt, MinLength, MaxLength, IsOptional } from 'class-validator';

export class UpdateStudentProfileDto {
  @IsOptional()
  @IsString({ message: 'Name must be a string' })
  @MinLength(2, { message: 'Name is too short' })
  @MaxLength(50, { message: 'Name is too long' })
  readonly name?: string;

  @IsOptional()
  @IsString({ message: 'Last name must be a string' })
  @MinLength(2, { message: 'Last name is too short' })
  @MaxLength(50, { message: 'Last name is too long' })
  readonly lastName?: string;

  @IsOptional()
  @IsString({ message: 'Career must be a string' })
  @MinLength(2, { message: 'Career is too short' })
  @MaxLength(50, { message: 'Career is too long' })
  readonly career?: string;

  @IsOptional()
  @IsInt({ message: 'Semester must be an integer' })
  readonly semester?: number;

  @IsOptional()
  @IsString({ message: 'Phone number must be a string' })
  @MinLength(10, { message: 'Phone number is too short' })
  @MaxLength(15, { message: 'Phone number is too long' })
  readonly phoneNumber?: string;

  @IsOptional()
  @IsString({ message: 'Address must be a string' })
  @MinLength(5, { message: 'Address is too short' })
  @MaxLength(100, { message: 'Address is too long' })
  readonly address?: string;
}
