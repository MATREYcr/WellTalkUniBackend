import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/modules/users/users.service';
import { StudentProfilesService } from 'src/modules/profile/student-profiles/student-profiles.service';
import { PsychologistProfilesService } from 'src/modules/profile/psychologist-profiles/psychologist-profiles.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/modules/users/entities/user.entity';
import { StudentProfile } from 'src/modules/profile/student-profiles/entities/student-profile.entity';
import { PsychologistProfile } from 'src/modules/profile/psychologist-profiles/entities/psychologist-profile.entity';

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
