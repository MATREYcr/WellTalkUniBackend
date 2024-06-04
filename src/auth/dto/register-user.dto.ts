import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';

export class RegisterUserDto {
  @ApiProperty({
    description: 'User details for registration',
    type: CreateUserDto,
  })
  user: CreateUserDto;

  @ApiProperty({
    description: 'Profile information for the user',
    type: Object, 
  })
  profile: any;
}
