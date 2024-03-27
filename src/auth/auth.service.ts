import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { StudentProfilesService } from 'src/student-profiles/student-profiles.service';
import { UsersService } from 'src/users/users.service';
import { userType } from 'src/users/entities/user.entity';
import { PsychologistProfilesService } from '../psychologist-profiles/psychologist-profiles.service';
import { CreateStudentProfileDto } from 'src/student-profiles/dto/create-student-profile.dto';
import { CreatePsychologistProfileDto } from 'src/psychologist-profiles/dto/create-psychologist-profile.dto';
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
      // console.log(userType.STUDENT, "typeeeee");
      // if (user.userType === userType.STUDENT && profile instanceof CreateStudentProfileDto === false) {
      //   console.log("Entroooo student");
      //   typeprofile = 'studentProfile';
      //   newProfile = await this.studentProfileService.createStudentProfile(profile);
      // }
      if (user.userType === userType.PSYCHOLOGIST && profile instanceof CreatePsychologistProfileDto === false) {
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
        throw new HttpException('Email is wrong', HttpStatus.NON_AUTHORITATIVE_INFORMATION);
      }
      const isPasswordValid = await bcryptjs.compare(password, userFound.password);
      if (!isPasswordValid) {
        throw new HttpException('Password is wrong', HttpStatus.NON_AUTHORITATIVE_INFORMATION);
      }
      return userFound;
    } catch (error) {
      throw error;
    }
  }
}



