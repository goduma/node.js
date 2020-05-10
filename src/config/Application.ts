import { ExpressConfig } from './Express';
import { Container } from 'typedi';
import { createConnection } from 'typeorm';
import { typeOrmConfig } from '../common/DatabaseConfig';
//For Express Application
export class Application {
  public server: any;
  public express: ExpressConfig;
  constructor() {
    this.express = Container.get(ExpressConfig);
    this.server = this.express.app.listen(3000, "localhost",() => {
      console.log(`Application started at Server: http://localhost:3000`);

  });
  this.createDBConnection();
}

public async createDBConnection() {
  try {
    await createConnection(typeOrmConfig);
    console.log('connection success');
  } catch (err) {
    console.log('connection failure')
  }
}
}
