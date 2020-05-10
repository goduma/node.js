import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { Item } from '../models/Item';

// type orm configuration
const typeOrmConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'oxxo',
  synchronize: false,
  logging: false,
  entities: [
    Item
  ],
};

export { typeOrmConfig };
