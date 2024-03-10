import { Module } from '@nestjs/common';
import { PsychologistProfilesService } from './psychologist-profiles.service';
import { PsychologistProfilesController } from './psychologist-profiles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PsychologistProfile } from './entities/psychologist-profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PsychologistProfile])],
  controllers: [PsychologistProfilesController],
  providers: [PsychologistProfilesService],
})
export class PsychologistProfilesModule { }
