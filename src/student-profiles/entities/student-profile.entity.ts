import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IsString, IsInt, MinLength, MaxLength, IsNotEmpty, IsDateString } from 'class-validator';
import { Appointment } from 'src/appoinments/entities/appoinment.entity';

@Entity()
export class StudentProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString({ message: 'Name must be a string' })
  @MinLength(2, { message: 'Name is too short' })
  @MaxLength(50, { message: 'Name is too long' })
  @IsNotEmpty({ message: 'Name cannot be empty' })
  name: string;

  @Column()
  @IsString({ message: 'Last name must be a string' })
  @MinLength(2, { message: 'Last name is too short' })
  @MaxLength(50, { message: 'Last name is too long' })
  @IsNotEmpty({ message: 'Last name cannot be empty' })
  lastName: string;

  @Column()
  @IsString({ message: 'Career must be a string' })
  @MinLength(2, { message: 'Career is too short' })
  @MaxLength(50, { message: 'Career is too long' })
  @IsNotEmpty({ message: 'Career cannot be empty' })
  career: string;

  @Column()
  @IsInt({ message: 'Semester must be an integer' })
  @IsNotEmpty({ message: 'Semester cannot be empty' })
  semester: number;

  @Column()
  @IsString({ message: 'Phone number must be a string' })
  @MinLength(10, { message: 'Phone number is too short' })
  @MaxLength(15, { message: 'Phone number is too long' })
  @IsNotEmpty({ message: 'Phone number cannot be empty' })
  phoneNumber: string;

  @Column()
  @IsString({ message: 'Address must be a string' })
  @MinLength(5, { message: 'Address is too short' })
  @MaxLength(100, { message: 'Address is too long' })
  @IsNotEmpty({ message: 'Address cannot be empty' })
  address: string;

  @Column()
  @IsString({ message: 'City must be a string' })
  @IsNotEmpty({ message: 'City cannot be empty' })
  city: string;

  @Column()
  @IsString({ message: 'Department must be a string' })
  @IsNotEmpty({ message: 'Department cannot be empty' })
  department: string;

  @Column()
  @IsString({ message: 'University must be a string' })
  @IsNotEmpty({ message: 'University cannot be empty' })
  university: string;

  @Column()
  @IsDateString()
  dateOfBirth: Date;

  @OneToMany(() => Appointment, (appointment) => appointment.student)
  appointments: Appointment[];
}

