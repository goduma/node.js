// response class
export class ItemDto {

    // the  response status
    private _status: number;
    // the result data
    private _data: any;
  
    // for setting response data
    public setData(data: any) {
      this._data = data;
    }
    // for getting response data
    public getData() {
      return this._data;
    }
  
    // for setting response status
    public setStatus(status: number) {
      this._status = status;
    }
    // for getting response status
    public getStatus() {
      return this._status;
    }
  }
  
  export default new ItemDto();
  