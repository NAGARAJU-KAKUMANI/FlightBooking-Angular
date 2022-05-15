import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable()
export class BookingService {
    private _eventUrl = "https://localhost:44394/api/Bookings/insert-booking-details";
   
    constructor(private http: HttpClient) {
      
    }
    PostBookingDetails(BookingDeatils:any) {
       
        debugger;
        return this.http.post<any>(this._eventUrl, BookingDeatils)
        
    } 
}