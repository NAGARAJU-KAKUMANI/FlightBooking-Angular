
import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import {NgbDateStruct,NgbCalendar, NgbDate} from '@ng-bootstrap/ng-bootstrap';
import {  flightSearch,flightsData } from '../models/flightData';
import { flightService } from '../services/flight.service';

@Component({
   selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
})
export class SearchFlightsComponent implements OnInit {
  model: NgbDateStruct |undefined;

  flights:Array<flightsData> = new Array<flightsData>();
  flightsmodel: flightsData=new flightsData();
  flightmodel:flightSearch=new flightSearch;

  constructor( public _fligentevn:flightService, private _router: Router) { }

  GetFromServer(){
  var flightdto={
    fromDate:this.flightmodel.fromDate,
    fromPlace:this.flightmodel.fromPlace,
    toplace:this.flightmodel.toplace,
  }
   debugger;
    this._fligentevn.getFlightDetails(flightdto).subscribe(res=>this.SuccessGet(res),res=>this.ErrorGet(res))
  }
  SuccessGet(res:any){
    console.log(res);
    this.flights=res;
    if(res.length==0)
    {
      alert('No flights Found in this Route!!')
    }
   
  }
  ErrorGet(res:any){ 
     debugger;  
    console.log(res);
  }
  ngOnInit(): void {
  }
  hasError(typeofvalidator:string,controlname:string):boolean{
    return this.flightmodel.formCustomerGroup.controls[controlname].hasError(typeofvalidator);
  }

//   filterWatches(): void {  
//     this._router.navigate(['/book'], { queryParams: { flightNumber:, type: 'analog' } });  
// }
Bookflight(input: flightsData) {
  debugger;
  console.log(flightsData)
  this._router.navigate(['/book'], { queryParams: { flightNumber:input.flightNumber,DateofJourny:input.startDate,FromPlace:input.fromPlace,Toplace:input.toPlace,BoardingTime:input.startTime} }); 
} 
}
