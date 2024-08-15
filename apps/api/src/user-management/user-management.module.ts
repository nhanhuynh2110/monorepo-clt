import { Module } from '@nestjs/common';
import { UserManagementController } from './controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleRepository, UserRepository } from './repositories';
import { UserManagementService } from './services';
import { ormConfig } from './conf/orm-onfig';
import { EventModuleNest } from '@pkg/event';
import { SomeService } from './events';

@Module({
  imports: [TypeOrmModule.forRoot(ormConfig as TypeOrmModule), EventModuleNest],
  controllers: [UserManagementController],
  providers: [
    UserManagementService,
    SomeService,
    UserRepository,
    RoleRepository,
  ],
})
export class UserManagementModule {}
