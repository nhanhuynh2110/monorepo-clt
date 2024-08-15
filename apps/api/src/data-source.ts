import { DataSource, DataSourceOptions } from 'typeorm';
import { ormConfig } from './user-management/conf/orm-onfig';

export const AppDataSource = new DataSource(ormConfig as DataSourceOptions);
