import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';
import { StudentProfilesService } from 'src/student-profiles/student-profiles.service';
import { PsychologistProfilesService } from 'src/psychologist-profiles/psychologist-profiles.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { StudentProfile } from 'src/student-profiles/entities/student-profile.entity';
import { PsychologistProfile } from 'src/psychologist-profiles/entities/psychologist-profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, StudentProfile, PsychologistProfile])],
  controllers: [AuthController],
  providers: [
    AuthService,
    UsersService,
    StudentProfilesService,
    PsychologistProfilesService
  ],
})
export class AuthModule {}
