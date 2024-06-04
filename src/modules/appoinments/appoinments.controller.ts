import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AppoinmentsService } from './appoinments.service';
import { CreateAppointmentDto } from './dto/create-appoinment.dto';
import { UpdateAppointmentDto } from './dto/update-appoinment.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('appoinments')
@Controller('appoinments')
export class AppoinmentsController {
  constructor(private readonly appoinmentsService: AppoinmentsService) { }

  @Post()
  create(@Body() createAppoinmentDto: CreateAppointmentDto) {
    return this.appoinmentsService.createAppointment(createAppoinmentDto);
  }

  @Get()
  findAll() {
    return this.appoinmentsService.findAllAppoinments();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appoinmentsService.findOneAppoinment(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppoinmentDto: UpdateAppointmentDto) {
    return this.appoinmentsService.updateAppoinment(+id, updateAppoinmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appoinmentsService.removeAppoinment(+id);
  }
}
