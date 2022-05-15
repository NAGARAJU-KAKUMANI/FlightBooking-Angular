import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable()
export class InventoryService {
    private _eventUrl = "https://localhost:44347/api/Inventory/PlanInventory";
   
    constructor(private http: HttpClient) {
      
    }
    postInventoryDetails(inventorys:any) {
        
        debugger;
        return this.http.post<any>(this._eventUrl, inventorys)
        
    } 
}