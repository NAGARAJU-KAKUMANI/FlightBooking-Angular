import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BookflightsData } from '../models/bookingData';
import { BookingService } from '../services/booking.service';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',

})
export class BookingComponent implements OnInit {
 
  // usersDateaModel:bookingUsers =new bookingUsers();
  // userDataModels:Array<bookingUsers>=new Array<bookingUsers>();
  response:string='';
  boarding:string='';
  
  bookflightDataModel: BookflightsData =new BookflightsData() ;

  constructor(public _BookingEvent: BookingService,private route: ActivatedRoute,private _router: Router) {
     this.route.queryParamMap.subscribe(data => {
      this.bookflightDataModel.flightNumber=data.get('flightNumber')|| '{}';
      this.bookflightDataModel.fromPlace=data.get('FromPlace')|| '{}';
      this.bookflightDataModel.toPlace=data.get('Toplace')|| '{}';
      this.boarding=data.get('DateofJourny')|| '{}';
      this.bookflightDataModel.dateOfJourney=this.boarding.substring(0,10);
      this.bookflightDataModel.boardingTime=data.get('BoardingTime')|| '{}';
     
     });
     this.bookflightDataModel.emailID=localStorage.getItem('email') || '{}';
   }
  PostBookingDetails() {
    if(this.bookflightDataModel.flightNumber=='')
    {
      return this._router.navigate(['/Searchflights'])
    }
    if(Number(this.bookflightDataModel.seattype)==0)
    {
      return alert('Select Seat Type')
    }
    debugger;
    var flightDetails = {
      flightNumber: this.bookflightDataModel.flightNumber,
      dateOfJourney: this.bookflightDataModel.dateOfJourney,
      fromPlace: this.bookflightDataModel.fromPlace,
      toPlace: this.bookflightDataModel.toPlace,
      boardingTime: this.bookflightDataModel.boardingTime,
      emailID: this.bookflightDataModel.emailID,
      createdBy: localStorage.getItem('userID'),
      seattype: Number(this.bookflightDataModel.seattype),
      userName: this.bookflightDataModel.userName,
      passportNumber: this.bookflightDataModel.passportNumber,
      age: Number(this.bookflightDataModel.age)
    }
    this._BookingEvent.PostBookingDetails(flightDetails).subscribe(res => this.SuccessGet(res), res => this.ErrorGet(res))

  }
  SuccessGet(res: any) {
    console.log(res);
    if(res.ticketID !=null || res.ticketID!='')
    {
    this.response="Ticket Booked Successfully Save Ticket ID:"+res.ticketID+"  For future use ";
    }
    this.bookflightDataModel = new BookflightsData();
    debugger;

  }
  ErrorGet(res: any) {
    debugger;
    console.log(res);
    
  }
  ngOnInit(): void {
   
    
  }
  
  // AddPassenger() {
  //   debugger;
  //   this.userDataModels.push(this.usersDateaModel);
  //   this.usersDateaModel = new bookingUsers();
  //   // this.GetFromServer();
  //   // //console.log(this.CustomerModels);
  // }
  // EditCustomer(input: bookingUsers) {

  //   this.usersDateaModel = input;
  // }

  hasError(typeofvalidator: string, controlname: string): boolean {
    return this.bookflightDataModel.formbookingGroup.controls[controlname].hasError(typeofvalidator);
  }

}
