import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { IsNotEmpty, IsDateString, IsEnum } from 'class-validator';
import { StudentProfile } from 'src/student-profiles/entities/student-profile.entity';
import { PsychologistProfile } from 'src/psychologist-profiles/entities/psychologist-profile.entity';

enum AppointmentStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  CANCELED = 'canceled',
}

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsDateString()
  @IsNotEmpty({ message: 'Date cannot be empty' })
  date: string;

  @Column({ default: AppointmentStatus.PENDING })
  @IsEnum(AppointmentStatus, { message: 'Invalid appointment status' })
  status: AppointmentStatus;

  @ManyToOne(() => StudentProfile, (student) => student.appointments, { eager: true })
  @JoinColumn()
  student: StudentProfile;

  @ManyToOne(() => PsychologistProfile, (psychologist) => psychologist.appointments, { eager: true })
  @JoinColumn()
  psychologist: PsychologistProfile;
}
