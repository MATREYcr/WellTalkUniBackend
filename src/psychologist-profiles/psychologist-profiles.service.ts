import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePsychologistProfileDto } from './dto/create-psychologist-profile.dto';
import { UpdatePsychologistProfileDto } from './dto/update-psychologist-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PsychologistProfile } from './entities/psychologist-profile.entity';

@Injectable()
export class PsychologistProfilesService {
  constructor(
    @InjectRepository(PsychologistProfile) private psychologistProfileRepository: Repository<PsychologistProfile>) { }

  createPsychologistProfile(psychologistProfile: CreatePsychologistProfileDto) {
    try {
      const newPsychologistProfile = this.psychologistProfileRepository.create(psychologistProfile);
      return this.psychologistProfileRepository.save(newPsychologistProfile);
    } catch (error) {
      console.error('Error creating Psychologist Profile', error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  findAllPsychologistProfiles() {
    try {
      return this.psychologistProfileRepository.find({
        relations: ['appointments']
      });
    } catch (error) {
      console.error('Error getting all Psychologist Profiles', error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOnePsychologistProfile(id: number) {
    try {
      const psychologistProfile = await this.psychologistProfileRepository.findOne({
        where: { id },
        relations: ['appointments']
      });
      if (!psychologistProfile) {
        throw new HttpException('Psychologist Profile not found', HttpStatus.NOT_FOUND);
      }
      return psychologistProfile;
    } catch (error) {
      throw error;
    }
  }

  async updatePsychologistProfile(id: number, updatePsychologistProfileDto: UpdatePsychologistProfileDto) {
    try {
      const psychologistProfileFound = await this.findOnePsychologistProfile(id);
      const updatePsychologistProfile = Object.assign(psychologistProfileFound, updatePsychologistProfileDto)
      return this.psychologistProfileRepository.save(updatePsychologistProfile);
    } catch (error) {
      console.error('Error update Psychologist Profile', error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async removePsychologistProfile(id: number) {
    try {
      const result = await this.psychologistProfileRepository.delete({ id });
      if (result.affected === 0) {
        return new HttpException('Psychologist Profile Not Found', HttpStatus.NOT_FOUND)
      }
      return result;
    } catch (error) {
      console.error('Error delete Psychologist Profile', error);
      throw error;
    }
  }

}
