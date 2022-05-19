import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable()
export class AirlineService {
    private _eventUrl = "https://localhost:44347/api/Inventory/get-all-Airlines";
    private _PlanUrl = "https://localhost:44347/api/Inventory/PlanAirline";
    private _CancelUrl = "https://localhost:44347/api/Inventory/cancel-Airline";
    private _EditUrl = "https://localhost:44347/api/Inventory/get-edit-airline/";
    private _UpdateUrl = "https://localhost:44347/api/Inventory/EditUpdateAirline";
  
    constructor(private http: HttpClient) {
      
    }
   
    GetAllAirlineDetails() {
       
        debugger;
        return this.http.get<any>(this._eventUrl)
        
    } 
    PostPlanAirlineDetails(AirlineDetails:any) {
       
        debugger;
        return this.http.post<any>(this._PlanUrl, AirlineDetails)
        
    } 

    PostcancelAirlineDetails(AirlineDetails:any) {
       
        debugger;
        return this.http.post<any>(this._CancelUrl, AirlineDetails)
        
    }
    GetEditAirlineDetails(airline:any) {
       
        debugger;
        return this.http.get<any>(this._EditUrl+airline.airlineId)
        
    }
    PostUpdateAirlineDetails(AirlineDetails:any) {
       
        debugger;
        return this.http.post<any>(this._UpdateUrl, AirlineDetails)
        
    } 

}