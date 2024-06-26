import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { StudentProfilesService } from 'src/modules/profile/student-profiles/student-profiles.service';
import { UsersService } from 'src/modules/users/users.service';
import { userType } from 'src/modules/users/entities/user.entity';
import { PsychologistProfilesService } from '../modules/profile/psychologist-profiles/psychologist-profiles.service';
import { CreateStudentProfileDto } from 'src/modules/profile/student-profiles/dto/create-student-profile.dto';
import { CreatePsychologistProfileDto } from 'src/modules/profile/psychologist-profiles/dto/create-psychologist-profile.dto';
import * as bcryptjs from 'bcryptjs';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly studentProfileService: StudentProfilesService,
    private readonly psychologistProfilesService: PsychologistProfilesService,
    private readonly usersService: UsersService,
  ) { }
    
  async registerUser({ user, profile }: RegisterUserDto) {
    try {
      let newProfile: any;
      let typeprofile = '';
      const userFound = await this.usersService.findOneUserByEmail(user.email);
      if (userFound) {
        throw new HttpException('User alredy Exist', HttpStatus.INTERNAL_SERVER_ERROR);
      }
      if (user.userType === userType.STUDENT) {
        console.log("Entroooo student");
        typeprofile = 'studentProfile';
        newProfile = await this.studentProfileService.createStudentProfile(profile);
      }
      if (user.userType === userType.PSYCHOLOGIST) {
        typeprofile = 'psychologistProfile';
        newProfile = await this.psychologistProfilesService.createPsychologistProfile(profile);
      }
      return await this.usersService.createUser({
        ...user,
        [typeprofile]: newProfile,
        password: await bcryptjs.hash(user.password, 10)
      });
    } catch (error) {
      throw error;
    }
  }

  async loginUser({ email, password }: LoginUserDto) {
    try {
      const userFound = await this.usersService.findOneUserByEmail(email);
      if (!userFound) {
        throw new HttpException('Email is wrong', HttpStatus.INTERNAL_SERVER_ERROR);
      }
      const isPasswordValid = await bcryptjs.compare(password, userFound.password);
      if (!isPasswordValid) {
        throw new HttpException('Password is wrong', HttpStatus.INTERNAL_SERVER_ERROR);
      }
      return userFound;
    } catch (error) {
      throw error;
    }
  }
}



