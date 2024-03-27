import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AppoinmentsModule } from './appoinments/appoinments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentProfilesModule } from './student-profiles/student-profiles.module';
import { PsychologistProfilesModule } from './psychologist-profiles/psychologist-profiles.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // type: 'postgres',
      // host: process.env.HOST,
      // port: parseInt(process.env.PORTBD),
      // username: process.env.USERNAME,
      // password: process.env.PASSWORD,
      // database: process.env.DATABASE,
      // entities: [__dirname + '/**/*.entity{.ts,.js}'],
      // synchronize: false
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234567',
      database: 'bdWellTalkUni',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    UsersModule,
    AppoinmentsModule,
    StudentProfilesModule,
    PsychologistProfilesModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
