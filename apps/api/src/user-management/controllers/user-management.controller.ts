import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserManagementService } from '../services';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserManagementDto } from '../dtos';
import { SomeService } from '../events';

@ApiTags('user-management')
@Controller('/user-management')
export class UserManagementController {
  constructor(
    private readonly userManagementService: UserManagementService,
    private readonly someService: SomeService,
) {}

  @Get()
  @ApiOperation({ summary: 'Filter user management' })
  filterUserManagement() {
    this.someService.someMethod();
    return this.userManagementService.filterUser();
  }

  @Post()
  @ApiOperation({ summary: 'Create user management' })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  createUserManagement(
    @Body() createUserManagementDto: CreateUserManagementDto,
  ) {
    return this.userManagementService.create(createUserManagementDto);
  }
}
