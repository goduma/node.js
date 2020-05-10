import 'reflect-metadata';
import {getConnection,getManager } from 'typeorm';
import { ItemDto } from '../dto/ItemDto';
import { Item } from '../models/Item';
import appLogger from "../common/Logging";
import OxxoItemsDao from "../dao/OxxoItemsDao";
// Service class to handle Service layer
export class OxxoService {
  
  logger=appLogger.getLogger();
  
  // to fetch list of items available
  public async getItemList() {
    this.logger.info('Enter into getItemList Method');
    let resp = new ItemDto();
    resp= await OxxoItemsDao.getItemListFromDb();
    this.logger.info('Exit from getItemList Method');
    return resp;
  }

}
export default new OxxoService();
