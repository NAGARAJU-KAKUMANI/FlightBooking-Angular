import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable()
export class flightService {
    private _eventUrl = "https://localhost:44347/api/Inventory/search-inventories";
   
    constructor(private http: HttpClient) {
      
    }
    getFlightDetails(flight:any) {
        
        debugger;
        return this.http.post<any>(this._eventUrl, flight)
        
    } 
}