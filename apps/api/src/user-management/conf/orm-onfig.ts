export const ormConfig = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'changeme',
  database: 'ctl',
  entities: ['dist/**/*.entity.js'],
  synchronize: true,
  migrations: ['dist/migration/**/*.js'],
  cli: {
    migrationsDir: 'src/migration', // Đường dẫn tới thư mục chứa migration source
  },
};
