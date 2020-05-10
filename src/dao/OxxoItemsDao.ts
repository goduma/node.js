import 'reflect-metadata';
import {getConnection,getManager } from 'typeorm';
import { ItemDto } from '../dto/ItemDto';
import { Item } from '../models/Item';
import appLogger from "../common/Logging";

// DAO class to handle DAO layer
export class OxxoItemsDao {
  
  logger=appLogger.getLogger();
  
  // to fetch list of items available
  public async getItemListFromDb() {
    this.logger.info('Enter into getItemListFromDb Method');
    let resp = new ItemDto();
    try {
      const repository = await getManager().getRepository(Item);
      const queryResults = await repository.find();
      resp.setData(queryResults);
      resp.setStatus(200);
    } catch (err) {
      this.logger.error('Error occurred while fetching data from DB')
    }
    this.logger.info('Exit from getItemListFromDb Method');
    return resp;
  }

}
export default new OxxoItemsDao();
