
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IsString, IsNotEmpty, IsDateString } from 'class-validator';
import { Appointment } from 'src/appoinments/entities/appoinment.entity';

@Entity()
export class PsychologistProfile {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    @IsString({ message: 'Name must be a string' })
    @IsNotEmpty({ message: 'Name cannot be empty' })
    name: string;
  
    @Column()
    @IsString({ message: 'Last name must be a string' })
    @IsNotEmpty({ message: 'Last name cannot be empty' })
    lastName: string;
  
    @Column()
    @IsString({ message: 'Phone number must be a string' })
    @IsNotEmpty({ message: 'Phone number cannot be empty' })
    phoneNumber: string;
  
    @Column()
    @IsString({ message: 'Address must be a string' })
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
    
    @OneToMany(() => Appointment, (appointment) => appointment.psychologist)
    appointments: Appointment[];
}
