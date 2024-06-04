import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AppoinmentsModule } from './modules/appoinments/appoinments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentProfilesModule } from './modules/profile/student-profiles/student-profiles.module';
import { PsychologistProfilesModule } from './modules/profile/psychologist-profiles/psychologist-profiles.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: parseInt(process.env.PORTBD),
      username: process.env.USERNAME_BD,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
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

