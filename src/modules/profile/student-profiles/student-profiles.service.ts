import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateStudentProfileDto } from './dto/create-student-profile.dto';
import { UpdateStudentProfileDto } from './dto/update-student-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentProfile } from './entities/student-profile.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentProfilesService {
  constructor(
    @InjectRepository(StudentProfile) private studentProfileRepository: Repository<StudentProfile>) { }

  createStudentProfile(studentProfile: CreateStudentProfileDto) {
    try {
      const newStudentProfile = this.studentProfileRepository.create(studentProfile);
      return this.studentProfileRepository.save(newStudentProfile);
    } catch (error) {
      console.error('Error creating Student Profile', error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  findAllStudentProfiles() {
    try {
      return this.studentProfileRepository.find({
        relations: ['appointments']
      });
    } catch (error) {
      console.error('Error getting all Student Profiles', error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOneStudentProfile(id: number) {
    try {
      const studentProfile = await this.studentProfileRepository.findOne({
        where: { id },
        relations: ['appointments']
      });
      if (!studentProfile) {
        throw new HttpException('Student Profile not found', HttpStatus.NOT_FOUND);
      }
      return studentProfile;
    } catch (error) {
      throw error;
    }
  }

  async updateStudentProfile(id: number, updateStudentProfileDto: UpdateStudentProfileDto) {
    try {
      const studentProfileFound = await this.findOneStudentProfile(id);
      const updateStudentProfile = Object.assign(studentProfileFound, updateStudentProfileDto)
      return this.studentProfileRepository.save(updateStudentProfile);
    } catch (error) {
      console.error('Error update Student Profile', error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async removeStudentProfile(id: number) {
    try {
      const result = await this.studentProfileRepository.delete({ id });
      if (result.affected === 0) {
        return new HttpException('Student Profile Not Found', HttpStatus.NOT_FOUND)
      }
      return result;
    } catch (error) {
      console.error('Error delete Student Profile', error);
      throw error;
    }
  }
}
