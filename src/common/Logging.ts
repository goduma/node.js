import * as winston from "winston";
const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('src/Properties/Application.properties');
// class for logging.
class AppLogger {
  private _logger: winston.Logger;
  constructor() {
    this.getLogger();
  }

  public getLogger() {
    this._logger = winston.createLogger({
      format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.json()
      ),
      level: properties.get('logLevel'),
      transports: [
        new winston.transports.File({ filename: "oxxo.log" }),
        //new winston.transports.Console()
      ],
    });
    return this._logger;
  }
}

export default new AppLogger();
