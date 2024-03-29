// create-appointment.dto.ts
import { IsDateString, IsEnum, IsInt, IsNotEmpty } from 'class-validator';

export class CreateAppointmentDto {
  @IsDateString()
  @IsNotEmpty({ message: 'Date cannot be empty' })
  date: string;

  @IsInt()
  student: number;

  @IsInt()
  psychologist: number;
}