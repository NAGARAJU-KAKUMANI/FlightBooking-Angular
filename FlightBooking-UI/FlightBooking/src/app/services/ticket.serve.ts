import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';


@Injectable()
export class ticketService {
    private _eventUrl = "https://localhost:44394/api/Bookings/pnr-ticket/";
    private _cancelUrl = "https://localhost:44394/api/Bookings/cancel-ticket/";
    constructor(private http: HttpClient) {
      
    }
    GetDetails(TicketID:string) { 
        debugger;
        console.log(this._eventUrl+TicketID) ;
        return this.http.get<any>(this._eventUrl+TicketID);
        
    } 
    CancelTicket(TicketID:string) { 
        debugger;
        console.log(this._cancelUrl+TicketID) ;
        return this.http.get<any>(this._cancelUrl+TicketID);
        
    } 
}