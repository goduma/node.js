import 'reflect-metadata';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as path from 'path';
import { Container } from 'typedi';
import { useContainer, useExpressServer } from 'routing-controllers';
import setupLogging from '../common/Logging';
//For Express Config.
export class ExpressConfig {
  public app: express.Express;
  constructor() {
    this.app = express();
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.setupControllers();
  }

  //For Registering the Controller.
  public setupControllers() {
    const resourcesPath = path.resolve('dist','controller');
    useContainer(Container);
    useExpressServer(this.app, {
      cors: {
        origin: '*'
     
      },
      controllers: [resourcesPath + '/*{.js,.ts}'],
    });
  }
}
export default new ExpressConfig();
