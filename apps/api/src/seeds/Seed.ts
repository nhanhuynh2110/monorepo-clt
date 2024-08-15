import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders, SeederOptions } from 'typeorm-extension';
import { User, Role } from '../user-management/entities';
import RoleSeeder from './RoleSeeder';

(async () => {
  const options: DataSourceOptions & SeederOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'changeme',
    database: 'ctl',
    entities: [Role, User],

    seeds: [RoleSeeder],
  };

  const dataSource = new DataSource(options);
  await dataSource.initialize();

  await runSeeders(dataSource);
})();
