import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable()
export class InventoryService {
    private _eventUrl = "https://localhost:44347/api/Inventory/PlanInventory";
    private _GetallUrl = "https://localhost:44347/api/Inventory/get-all-inventories/"+localStorage.getItem('userID');
    private _CancelUrl = "https://localhost:44347/api/Inventory/cancel-inventories";
    private _EditGetlUrl = "https://localhost:44347/api/Inventory/get-edit-inventories";
    private _UpdateInventorylUrl = "https://localhost:44347/api/Inventory/EditUpdateInventory";
    private _getAllAirlineUrl = "https://localhost:44347/api/Inventory/get-all-Airlines";
    constructor(private http: HttpClient) {
      
    }
    GetAllAirlineDetails() {
       
        debugger;
        return this.http.get<any>(this._getAllAirlineUrl)
        
    } 
    postInventoryDetails(inventorys:any) {
        
        debugger;
        return this.http.post<any>(this._eventUrl, inventorys)
        
    } 
    EditpostInventoryDetails(inventorys:any) {
        
        debugger;
        return this.http.post<any>(this._UpdateInventorylUrl, inventorys)
        
    } 
    GetInventoryDetails() {
        
        debugger;
        // this._GetallUrl=this._GetallUrl+"/"+inventorys
        // console.log(this._GetallUrl)
        return this.http.get<any>(this._GetallUrl)
        
    } 
    postCaneclInventoryDetails(inventorys:any) {
        
        debugger;
        return this.http.post<any>(this._CancelUrl, inventorys)
        
    }
    GetEditInventoryDetails(inventorys:any) {
        
        debugger;
        // this._GetallUrl=this._GetallUrl+"/"+inventorys
        // console.log(this._GetallUrl)
        return this.http.get<any>(this._EditGetlUrl+"/"+inventorys.flightNumber)
        
    } 
}