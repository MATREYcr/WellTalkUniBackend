import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

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
}