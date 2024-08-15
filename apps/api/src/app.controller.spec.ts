// import { Test, TestingModule } from '@nestjs/testing';
// import { AppController } from './app.controller';
// import { UserService } from './services/UserService';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { config } from './ormconfig';
// import { UserRepository } from './repositories/UserRepository';

// describe('AppController', () => {
//   let appController: AppController;
//   let userService: UserService;

//   beforeEach(async () => {
//     const app: TestingModule = await Test.createTestingModule({
//       imports: [TypeOrmModule.forRoot(config as TypeOrmModule)],
//       controllers: [AppController],
//       providers: [UserService, UserRepository],
//     }).compile();

//     appController = app.get<AppController>(AppController);
//     userService = app.get<UserService>(UserService);
//   });

//   describe('createUser', () => {
//     it('should call userService.create and return the resul', async () => {
//       const result = { id: 1, name: 'John Doe' };

//       (userService.create as jest.Mock).mockResolvedValue(result);

//       // Act
//       const response = await appController.createUser();

//       // Assert
//       expect(userService.create).toHaveBeenCalledWith();
//       expect(response).toEqual(result);
//     });
//   });
// });
