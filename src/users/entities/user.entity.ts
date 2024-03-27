import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { StudentProfile } from 'src/student-profiles/entities/student-profile.entity';
import { PsychologistProfile } from 'src/psychologist-profiles/entities/psychologist-profile.entity';

export enum userType {
  STUDENT = 'STUDENT',
  PSYCHOLOGIST = 'PSYCHOLOGIST',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString({ message: 'Username must be a string' })
  @IsNotEmpty({ message: 'Username cannot be empty' })
  email: string;

  @Column()
  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password cannot be empty' })
  password: string;

  @Column({ type: 'enum', enum: userType, default: userType.STUDENT })
  @IsEnum(userType, { message: 'Invalid user type' })
  userType: userType;


  @OneToOne(() => StudentProfile, { nullable: true, eager: true})
  @JoinColumn()
  studentProfile: StudentProfile;

  
  @OneToOne(() => PsychologistProfile, { nullable: true, eager: true })
  @JoinColumn()
  psychologistProfile: PsychologistProfile;
}
