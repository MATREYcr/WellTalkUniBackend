import { IsDateString, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

enum UpdateAppointmentStatus {
    PENDING = 'pending',
    CONFIRMED = 'confirmed',
    CANCELED = 'canceled',
}

export class UpdateAppointmentDto {
    @ApiPropertyOptional({
        example: '2024-06-15',
        description: 'The date of the appointment',
    })
    @IsOptional()
    @IsString({ message: 'Date must be a string' })
    @IsNotEmpty({ message: 'Date cannot be empty' })
    date?: string;

    @ApiPropertyOptional({
        example: '14:00',
        description: 'The time of the appointment',
    })
    @IsOptional()
    @IsNotEmpty({ message: 'Time cannot be empty' })
    time?: string;

    @ApiPropertyOptional({
        enum: UpdateAppointmentStatus,
        example: 'confirmed',
        description: 'The status of the appointment',
    })
    @IsOptional()
    @IsEnum(UpdateAppointmentStatus, { message: 'Invalid appointment status' })
    status?: UpdateAppointmentStatus;

    @ApiProperty({
        example: 1,
        description: 'The ID of the student for the appointment',
    })
    @IsInt()
    studentId: number;

    @ApiProperty({
        example: 2,
        description: 'The ID of the psychologist for the appointment',
    })
    @IsInt()
    psychologistId: number;
}
