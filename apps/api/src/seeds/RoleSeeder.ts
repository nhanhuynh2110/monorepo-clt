import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Role } from '../user-management/entities';

export default class UserSeeder implements Seeder {
  /**
   * Track seeder execution.
   *
   * Default: false
   */
  track = false;

  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(Role);

    const rolesData = [
      {
        name: 'admin',
      },
      {
        name: 'user',
      },
    ];

    await Promise.all(
      rolesData.map((roleData) => repository.upsert(roleData, ['name'])),
    );
  }
}
