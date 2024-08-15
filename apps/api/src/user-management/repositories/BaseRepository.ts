import {
  DeepPartial,
  EntityManager,
  EntityTarget,
  FindManyOptions,
  FindOneOptions,
  Repository,
  UpdateResult,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export class BaseRepository<T> {
  private readonly repository: Repository<T>;
  constructor(
    private readonly entity: EntityTarget<T>,
    private readonly entityManager: EntityManager,
  ) {
    this.repository = this.entityManager.getRepository(this.entity);
  }

  /**
   * Save a new or existing entity.
   * @param data The data to save. This can be a new entity or an existing one to update.
   * @returns The saved entity.
   */
  async save(data: DeepPartial<T>): Promise<T> {
    return await this.repository.save(data);
  }

  /**
   * Find one entity by ID.
   * @param id The ID of the entity to find.
   * @param options Optional additional options like relations.
   * @returns The found entity or undefined if not found.
   */
  async findOne(options?: FindOneOptions<T>): Promise<T | undefined> {
    return await this.repository.findOne(options);
  }

  /**
   * Find all entities.
   * @param options Optional additional options for the query.
   * @returns An array of entities.
   */
  async findAll(options?: FindManyOptions<T>): Promise<T[]> {
    return await this.repository.find(options);
  }

  async update(
    criteria: any,
    partialEntity: QueryDeepPartialEntity<T>,
  ): Promise<UpdateResult> {
    return await this.repository.update(criteria, partialEntity);
  }

  /**
   * Delete an entity by ID.
   * @param id The ID of the entity to delete.
   * @returns The delete result.
   */
  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  
}
