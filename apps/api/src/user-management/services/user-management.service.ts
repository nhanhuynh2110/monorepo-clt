import { Injectable } from '@nestjs/common';
import { RoleRepository, UserRepository } from '../repositories';
import { ErrorException } from '@app/lib/exceptions';

@Injectable()
export class UserManagementService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly roleRepository: RoleRepository,
  ) {}

  async filterUser() {
    return await this.userRepository.findAll();
  }

  async create(data: { name: string; email: string; role: string }) {
    const { role, ...userInfo } = data;
    const roleData = await this.roleRepository.findOne({
      where: { name: role },
    });

    if (!roleData) {
      throw new ErrorException('Role not found');
    }
    const user = await this.userRepository.createUser({
      ...userInfo,
      role: roleData,
    });
    return await this.userRepository.save(user);
  }
}
