import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';
import { BaseRepository } from './BaseRepository';
import { Role } from '../entities/Role.entity';

@Injectable()
export class RoleRepository extends BaseRepository<Role> {
  constructor(@InjectEntityManager() entityManager: EntityManager) {
    super(Role, entityManager);
    console.log('entityManager', entityManager);
  }
}
