import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PsychologistProfilesService } from './psychologist-profiles.service';
import { CreatePsychologistProfileDto } from './dto/create-psychologist-profile.dto';
import { UpdatePsychologistProfileDto } from './dto/update-psychologist-profile.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('psychologist-profiles')
@Controller('psychologist-profiles')
export class PsychologistProfilesController {
  constructor(private readonly psychologistProfilesService: PsychologistProfilesService) { }

  @Post()
  create(@Body() createPsychologistProfileDto: CreatePsychologistProfileDto) {
    return this.psychologistProfilesService.createPsychologistProfile(createPsychologistProfileDto);
  }

  @Get()
  findAll() {
    return this.psychologistProfilesService.findAllPsychologistProfiles();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.psychologistProfilesService.findOnePsychologistProfile(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePsychologistProfileDto: UpdatePsychologistProfileDto) {
    return this.psychologistProfilesService.updatePsychologistProfile(+id, updatePsychologistProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.psychologistProfilesService.removePsychologistProfile(+id);
  }
}
