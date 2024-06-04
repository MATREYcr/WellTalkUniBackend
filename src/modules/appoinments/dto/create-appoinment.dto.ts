import { IsDateString, IsEnum, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAppointmentDto {
  @ApiProperty({
    example: '2024-06-15',
    description: 'The date of the appointment',
  })
  @IsString({ message: 'Date must be a string' })
  @IsNotEmpty({ message: 'Date cannot be empty' })
  date: string;

  @ApiProperty({
    example: '14:00',
    description: 'The time of the appointment',
  })
  @IsNotEmpty({ message: 'Time cannot be empty' })
  time: string;

  @ApiProperty({
    example: 1,
    description: 'The ID of the student for the appointment',
  })
  @IsInt()
  student: number;

  @ApiProperty({
    example: 2,
    description: 'The ID of the psychologist for the appointment',
  })
  @IsInt()
  psychologist: number;
}
