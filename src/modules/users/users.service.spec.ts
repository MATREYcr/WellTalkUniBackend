import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, userType } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { HttpException, HttpStatus } from '@nestjs/common';

describe('UsersService', () => {
  let service: UsersService;
  let repository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      const createUserDto: CreateUserDto = { email: 'test@example.com', password: 'password', userType: userType.STUDENT };
      const newUser = new User();
      newUser.id = 1;
      newUser.email = createUserDto.email;
      newUser.password = createUserDto.password;
      newUser.userType = createUserDto.userType;

      jest.spyOn(repository, 'create').mockReturnValue(newUser);
      jest.spyOn(repository, 'save').mockResolvedValue(newUser);
      
      const result = await service.createUser(createUserDto);

      expect(result).toEqual(newUser);
    });

    it('should throw an error when creating user fails', async () => {
      const createUserDto: CreateUserDto = { email: 'test@example.com', password: 'password', userType: userType.STUDENT };
      
      jest.spyOn(repository, 'create').mockImplementation(() => { throw new Error() });
      
      await expect(service.createUser(createUserDto)).rejects.toThrow(HttpException);
    });
  });

//   describe('findAllUsers', () => {
//     it('should return an array of users', async () => {
//       const users = [{ id: 1, email: 'test1@example.com', password: 'password1', userType: userType.STUDENT },
//                      { id: 2, email: 'test2@example.com', password: 'password2', userType: userType.PSYCHOLOGIST }];

//       jest.spyOn(repository, 'find').mockResolvedValue(users);
      
//       const result = await service.findAllUsers();

//       expect(result).toEqual(users);
//     });

//     it('should throw an error when retrieving users fails', async () => {
//       jest.spyOn(repository, 'find').mockImplementation(() => { throw new Error() });
      
//       await expect(service.findAllUsers()).rejects.toThrow(HttpException);
//     });
//   });

  // Agrega más pruebas para los otros métodos del servicio según sea necesario
});
