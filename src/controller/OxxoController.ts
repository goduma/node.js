import { Body, Get, JsonController, Post, Res, QueryParam } from "routing-controllers";
import { Response } from "express";
import appLogger from "../common/Logging";
import OxxoService from "../services/OxxoService";
import { ItemDto } from "../dto/ItemDto";

//sample oxxo controller
@JsonController("/oxxo")
export default class OXXOController {

    logger=appLogger.getLogger();

    //get oxxo data controller
    @Get("/data")
    public async getOxxoData(@Res() res: Response){
        this.logger.info("Entry into oxxo data method");
        let responseFromDao = new ItemDto()
        responseFromDao=await OxxoService.getItemList();
        this.logger.info('Exit from oxxo data method')
        res.send(responseFromDao);

    }

}