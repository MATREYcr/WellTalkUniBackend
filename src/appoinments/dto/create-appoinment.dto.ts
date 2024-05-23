// create-appointment.dto.ts
import { IsDateString, IsEnum, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateAppointmentDto {
  @IsString({ message: 'Date must be a string' })
  @IsNotEmpty({ message: 'Date cannot be empty' })
  date: string;

  @IsNotEmpty({ message: 'Date cannot be empty' })
  time: string;

  @IsInt()
  student: number;

  @IsInt()
  psychologist: number;
}