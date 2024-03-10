import { CreatePsychologistProfileDto } from "src/psychologist-profiles/dto/create-psychologist-profile.dto";
import { CreateStudentProfileDto } from "src/student-profiles/dto/create-student-profile.dto";
import { CreateUserDto } from "src/users/dto/create-user.dto";

export class RegisterUserDto {
    user: CreateUserDto
    profile: CreateStudentProfileDto | CreatePsychologistProfileDto
}
