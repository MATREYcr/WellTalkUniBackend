import { Module } from '@nestjs/common';
import { AppoinmentsService } from './appoinments.service';
import { AppoinmentsController } from './appoinments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appointment } from './entities/appoinment.entity';
import { StudentProfilesService } from 'src/student-profiles/student-profiles.service';
import { PsychologistProfilesService } from 'src/psychologist-profiles/psychologist-profiles.service';
import { StudentProfile } from 'src/student-profiles/entities/student-profile.entity';
import { PsychologistProfile } from 'src/psychologist-profiles/entities/psychologist-profile.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Appointment, StudentProfile, PsychologistProfile])],
  controllers: [AppoinmentsController],
  providers: [
    AppoinmentsService,
    StudentProfilesService,
    PsychologistProfilesService
  ]
})
export class AppoinmentsModule { }
