import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentProfilesService } from './student-profiles.service';
import { CreateStudentProfileDto } from './dto/create-student-profile.dto';
import { UpdateStudentProfileDto } from './dto/update-student-profile.dto';

@Controller('student-profiles')
export class StudentProfilesController {
  constructor(private readonly studentProfilesService: StudentProfilesService) { }

  @Post()
  create(@Body() createStudentProfileDto: CreateStudentProfileDto) {
    return this.studentProfilesService.createStudentProfile(createStudentProfileDto);
  }

  @Get()
  findAll() {
    return this.studentProfilesService.findAllStudentProfiles();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentProfilesService.findOneStudentProfile(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentProfileDto: UpdateStudentProfileDto) {
    return this.studentProfilesService.updateStudentProfile(+id, updateStudentProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentProfilesService.removeStudentProfile(+id);
  }
}
