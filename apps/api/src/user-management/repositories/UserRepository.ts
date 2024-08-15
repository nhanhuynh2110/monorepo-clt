import { Injectable } from '@nestjs/common';
import { EntityManager, UpdateResult } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';
import { User } from '../entities';
import { BaseRepository } from './BaseRepository';

@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor(@InjectEntityManager() entityManager: EntityManager) {
    super(User, entityManager);
    console.log('entityManager', entityManager);
  }

  async getById(id: string) {
    return this.findOne({ where: { id } });
  }
  async createUser(data: Partial<User>) {
    const user = new User();
    user.name = data.name;
    user.email = data.email;
    user.role = data.role;
    return user;
  }

  async updateUser(id: number, data: Partial<User>): Promise<UpdateResult> {
    return await this.update(id, data);
  }
}
