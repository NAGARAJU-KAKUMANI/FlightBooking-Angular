import { Component, OnInit } from '@angular/core';
import { AirlineData } from '../models/AirlineData';
import { AirlineService } from '../services/airline.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  // styleUrls: ['./airline.component.css']
})
export class AirlineComponent implements OnInit {
  public submit = true;
  public edited = false;
  public cancel = false;
  airlinedataModel: AirlineData = new AirlineData();
  AlirlineModels: Array<AirlineData> = new Array<AirlineData>();
  constructor(public _airlineService: AirlineService) { }

  ngOnInit(): void {
    this.GetAllAirlineDetails();
  }

  GetAllAirlineDetails() {
    this._airlineService.GetAllAirlineDetails().subscribe(res => this.SuccessGetAll(res), res => this.ErrorGetAll(res))
  }
  SuccessGetAll(res: any) {

    this.AlirlineModels = res;
    console.log(res);

  }
  ErrorGetAll(res: any) {
    Swal.fire('Something Went Wrong Please try After Some time');
    console.log(res);
  }

  PostPlanAirlineDetails() {

    var airlinedto = {
      airlineName: this.airlinedataModel.name,
      address: this.airlinedataModel.address,
      contact: this.airlinedataModel.contactNumber,
      createdBy: localStorage.getItem('userID')
    }
    debugger;
    this._airlineService.PostPlanAirlineDetails(airlinedto).subscribe(res => this.SuccessGet(res), res => this.ErrorGet(res))

  }
  SuccessGet(res: any) {
    debugger;
    console.log(res);
    debugger;
    if (res.message != null) {
      this.GetAllAirlineDetails();
      Swal.fire(res.message);
    }
    this.airlinedataModel = new AirlineData();
    debugger;

  }
  ErrorGet(res: any) {
    debugger;
    Swal.fire('Something Went Wrong Please try After Some time');
    console.log(res);
  }

  DeleteInventory(input: any) {
    debugger;
    var Airlinedto = {
      airlineId: input.airlineId,
      updatedBy: localStorage.getItem('userID')
    }
    debugger;
    this._airlineService.PostcancelAirlineDetails(Airlinedto).subscribe(res => this.SuccessCancelGet(res), res => this.ErrorCancelGet(res));
    debugger;
  }
  SuccessCancelGet(res: any) {
    console.log(res);
    if (res.message != null) {
      this.GetAllAirlineDetails();
      Swal.fire(res.message);
    }
    this.airlinedataModel = new AirlineData();
    debugger;

  }
  ErrorCancelGet(res: any) {
    debugger;
    Swal.fire('Something Went Wrong Please try After Some time');
    console.log(res);
  }
  CancelEdit() {
    this.cancel = false;
    this.edited = false;
    this.submit = true;
    this.airlinedataModel = new AirlineData();
  }
  EditInventory(input: any) {
    this.edited = true;
    this.submit = false;
    this.cancel = true;
    this._airlineService.GetEditAirlineDetails(input).subscribe(res => this.SuccessEditGet(res), res => this.ErrorEditGet(res));
  }
  SuccessEditGet(res: any) {
    console.log(res);
    this.airlinedataModel.airlineId=res.airlineId;
    this.airlinedataModel.name = res.name;
    this.airlinedataModel.contactNumber = res.contactNumber;
    this.airlinedataModel.address = res.address;
    debugger;
  }
  ErrorEditGet(res: any) {
    debugger;
    Swal.fire('Something Went Wrong Please try After Some time');
    console.log(res);
  }
  PostupdatePlanAirlineDetails() {

    var airlinedto = {
      airlineId:this.airlinedataModel.airlineId,
      name: this.airlinedataModel.name,
      address: this.airlinedataModel.address,
      contactNumber: this.airlinedataModel.contactNumber,
      updatedBy: localStorage.getItem('userID')
    }
    debugger;
    this._airlineService.PostUpdateAirlineDetails(airlinedto).subscribe(res => this.SuccessupdateGet(res), res => this.ErrorUpdateGet(res))

  }
  SuccessupdateGet(res: any) {
    debugger;
    console.log(res);
    debugger;
    if (res.message != null) {
      this.cancel = false;
      this.edited = false;
      this.submit = true;
      this.GetAllAirlineDetails();
      Swal.fire(res.message);
    }
    this.airlinedataModel = new AirlineData();
    debugger;

  }
  ErrorUpdateGet(res: any) {
    debugger;
    Swal.fire('Something Went Wrong Please try After Some time');
    console.log(res);
  }
  hasError(typeofvalidator: string, controlname: string): boolean {
    return this.airlinedataModel.formAirlineGroup.controls[controlname].hasError(typeofvalidator);
  }

}
