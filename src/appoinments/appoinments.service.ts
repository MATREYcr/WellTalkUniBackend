import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appointment } from './entities/appoinment.entity';
import { CreateAppointmentDto } from './dto/create-appoinment.dto';
import { UpdateAppointmentDto } from './dto/update-appoinment.dto';
import { StudentProfilesService } from 'src/student-profiles/student-profiles.service';
import { PsychologistProfilesService } from 'src/psychologist-profiles/psychologist-profiles.service';

@Injectable()
export class AppoinmentsService {

  constructor(
    @InjectRepository(Appointment) private appointmentProfileRepository: Repository<Appointment>,
    private readonly studentProfileService: StudentProfilesService,
    private readonly psychologistProfileService: PsychologistProfilesService,
    ) { }

  async createAppointment(createAppointmentDto: CreateAppointmentDto) {
    try {
      console.log(createAppointmentDto, 'createappointment');
      const studentProfile = await this.studentProfileService.findOneStudentProfile(createAppointmentDto.student);
      const psychologistProfile = await this.psychologistProfileService.findOnePsychologistProfile(createAppointmentDto.psychologist);

      const newAppointmentProfile = this.appointmentProfileRepository.create({
        date: createAppointmentDto.date,
        time: createAppointmentDto.time,
        student: studentProfile,
        psychologist: psychologistProfile
      });
      return await this.appointmentProfileRepository.save(newAppointmentProfile);
    } catch (error) {
      console.error('Error creating Appointment', error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  findAllAppoinments() {
    try {
      return this.appointmentProfileRepository.find();
    } catch (error) {
      console.error('Error getting all Appoinments', error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOneAppoinment(id: number) {
    try {
      const appoinmentFound = await this.appointmentProfileRepository.findOne({
        where: { id }
      });
      if (!appoinmentFound) {
        throw new HttpException('Appoinment not found', HttpStatus.NOT_FOUND);
      }
      return appoinmentFound;
    } catch (error) {
      throw error;
    }
  }

  async updateAppoinment(id: number, updateAppoinmentDto: UpdateAppointmentDto) {
    try {
      const appoinmentFound = await this.findOneAppoinment(id);
      const updateAppoinment = Object.assign(appoinmentFound, updateAppoinmentDto)
      return this.appointmentProfileRepository.save(updateAppoinment);
    } catch (error) {
      console.error('Error update Appoinment', error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async removeAppoinment(id: number) {
    try {
      const result = await this.appointmentProfileRepository.delete({ id });
      if (result.affected === 0) {
        return new HttpException('Appoinment Not Found', HttpStatus.NOT_FOUND)
      }
      return result;
    } catch (error) {
      console.error('Error delete Appoinment', error);
      throw error;
    }
  }
}
