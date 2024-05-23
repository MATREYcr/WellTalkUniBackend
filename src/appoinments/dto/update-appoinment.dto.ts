// update-appointment.dto.ts
import { IsDateString, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

enum UpdateAppointmentStatus {
    PENDING = 'pending',
    CONFIRMED = 'confirmed',
    CANCELED = 'canceled',
}

export class UpdateAppointmentDto {
    @IsOptional()
    @IsString({ message: 'Date must be a string' })
    @IsNotEmpty({ message: 'Date cannot be empty' })
    date: string;

    @IsNotEmpty({ message: 'Date cannot be empty' })
    time?: string;

    @IsOptional()
    @IsEnum(UpdateAppointmentStatus, { message: 'Invalid appointment status' })
    status?: UpdateAppointmentStatus;

    @IsInt()
    studentId: number;

    @IsInt()
    psychologistId: number;
}
