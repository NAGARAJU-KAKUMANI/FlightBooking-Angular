import { Component, OnInit } from '@angular/core';
import { ALLInventoryData, InventoryData,AirlineData } from '../models/inventoryData';
import { InventoryService } from '../services/Inventory.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',

})
export class InventoryComponent implements OnInit {
  public submit = true;
  public edited = false;
  public cancel = false;
  AirlineDataModels:Array<AirlineData>=new Array< AirlineData>();
  Inventorys: Array<ALLInventoryData> = new Array<ALLInventoryData>();
  InventoryModel: InventoryData = new InventoryData();
  Success: string = '';
  constructor(public _InventoryEvent: InventoryService) {

  }
  GetAllAirline() {

    this._InventoryEvent.GetAllAirlineDetails().subscribe(res => this.SuccessGetAllAirline(res), res => this.ErrorGetAllAirline(res))
  }
  SuccessGetAllAirline(res: any) {
    debugger;
    console.log(res);
    this.AirlineDataModels = res;
    console.log(res);
    debugger;

  }
  ErrorGetAllAirline(res: any) {
    debugger;
    Swal.fire('Something Went Wrong Please try After Some time');
    console.log(res);
  }

  GetAllinventorys() {

    this._InventoryEvent.GetInventoryDetails().subscribe(res => this.SuccessGetAll(res), res => this.ErrorGetAll(res))
  }
  SuccessGetAll(res: any) {
    debugger;
    console.log(res);
    this.Inventorys = res;
    this.cancel = false;
    this.edited = false;
    this.submit = true;
    console.log(res);

  }
  ErrorGetAll(res: any) {
    debugger;
    Swal.fire('Something Went Wrong Please try After Some time');
    console.log(res);
  }

  PostInventoryDetails() {
    if (Number(this.InventoryModel.airLineId) == 0) {
      return alert('Select Airline Name')
    }
    if (Number(this.InventoryModel.scheduledDays) == 0) {
      return alert('Select Schedule Days')
    }
    if (Number(this.InventoryModel.meal) == 0) {
      return alert('Select Schedule Days')
    }
    var Inventorydto = {
      flightNumber: this.InventoryModel.flightNumber,
      airLineId: Number(this.InventoryModel.airLineId),
      fromPlace: this.InventoryModel.fromPlace,
      toPlace: this.InventoryModel.toPlace,
      startDate: this.InventoryModel.startDate,
      endDate: this.InventoryModel.endDate,
      startTime: this.InventoryModel.startTime,
      endTime: this.InventoryModel.endTime,
      scheduledDays: Number(this.InventoryModel.scheduledDays),
      instrument: this.InventoryModel.instrument,
      bClassCount: Number(this.InventoryModel.bClassCount),
      bclassAvailCount: Number(this.InventoryModel.bClassCount),
      nbClassCount: Number(this.InventoryModel.nbClassCount),
      nBclassAvailableCount: Number(this.InventoryModel.nbClassCount),
      ticketCost: Number(this.InventoryModel.ticketCost),
      rows: Number(this.InventoryModel.rows),
      meal: Number(this.InventoryModel.meal),
      createdBy: localStorage.getItem('userID')
    }
    debugger;
    this._InventoryEvent.postInventoryDetails(Inventorydto).subscribe(res => this.SuccessGet(res), res => this.ErrorGet(res));
    debugger;

  }
  SuccessGet(res: any) {
    console.log(res);
    if (res.message != null) {
      this.GetAllinventorys();
      this.Success = res.message;
      Swal.fire(this.Success);
    }
    this.InventoryModel = new InventoryData();
    debugger;

  }
  ErrorGet(res: any) {
    debugger;
    Swal.fire('Something Went Wrong Please try After Some time');
    console.log(res);
  }
  ngOnInit(): void {
    this.GetAllinventorys();
    this. GetAllAirline();
  }
  changeairline(e: any) {
    let option = e.target.value;
    debugger;
    if (option == 0) {
      this.InventoryModel.formInventoryGroup.controls['airLineId'].setValidators([
        Validators.required
      ]);
    }
    console.log(e.target.value);
  }
  changemeal(e: any) {
    let option = e.target.value;
    debugger;
    if (option == 0) {
      this.InventoryModel.formInventoryGroup.controls['mealControl'].setValidators([
        Validators.required
      ]);
    }
    console.log(e.target.value);
  }
  changeSchedule(e: any) {
    let option = e.target.value;
    debugger;
    if (option == 0) {
      this.InventoryModel.formInventoryGroup.controls['scheduledDaysControl'].valueChanges;
    }
    console.log(e.target.value);
  }

  hasError(typeofvalidator: string, controlname: string): boolean {
    return this.InventoryModel.formInventoryGroup.controls[controlname].hasError(typeofvalidator);
  }
  EditInventory(input: any) {
    this.edited = true;
    this.submit = false;
    this.cancel = true;
    this._InventoryEvent.GetEditInventoryDetails(input).subscribe(res => this.SuccessEditGet(res), res => this.ErrorEditGet(res));
  }
  SuccessEditGet(res: any) {

    console.log(res);

    this.InventoryModel.flightNumber = res.flightNumber;
    this.InventoryModel.airLineId = res.airLineId;
    this.InventoryModel.bClassCount = res.bClassCount;

    this.InventoryModel.nbClassCount = res.nbClassCount;
    this.InventoryModel.endDate = res.endDate;
    this.InventoryModel.startDate = res.startDate;

    this.InventoryModel.startTime = res.startTime;
    this.InventoryModel.endTime = res.endTime;
    this.InventoryModel.fromPlace = res.fromPlace;

    this.InventoryModel.toPlace = res.toPlace;
    this.InventoryModel.rows = res.rows;
    this.InventoryModel.meal = res.meal;

    this.InventoryModel.instrument = res.instrument;
    this.InventoryModel.scheduledDays = res.scheduledDays;
    this.InventoryModel.ticketCost = res.ticketCost
    debugger;

  }
  ErrorEditGet(res: any) {
    debugger;
    Swal.fire('Something Went Wrong Please try After Some time');
    console.log(res);
  }
  DeleteInventory(input: any) {
    debugger;
    var Inventorydto = {
      flightNumber: input.flightNumber,
      updatedby: localStorage.getItem('userID')
    }
    debugger;
    this._InventoryEvent.postCaneclInventoryDetails(Inventorydto).subscribe(res => this.SuccessCancelGet(res), res => this.ErrorCancelGet(res));
    debugger;
  }
  SuccessCancelGet(res: any) {
    console.log(res);
    if (res.message != null) {
      this.GetAllinventorys();
      Swal.fire(res.message);
    }
    this.InventoryModel = new InventoryData();
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
    this.InventoryModel = new InventoryData();
  }

  EditPostInventoryDetails() {
    if (Number(this.InventoryModel.airLineId) == 0) {
      return alert('Select Airline Name')
    }
    if (Number(this.InventoryModel.scheduledDays) == 0) {
      return alert('Select Schedule Days')
    }
    if (Number(this.InventoryModel.meal) == 0) {
      return alert('Select Schedule Days')
    }
    var Inventorydto = {
      flightNumber: this.InventoryModel.flightNumber,
      airLineId: Number(this.InventoryModel.airLineId),
      fromPlace: this.InventoryModel.fromPlace,
      toPlace: this.InventoryModel.toPlace,
      startDate: this.InventoryModel.startDate,
      endDate: this.InventoryModel.endDate,
      startTime: this.InventoryModel.startTime,
      endTime: this.InventoryModel.endTime,
      scheduledDays: Number(this.InventoryModel.scheduledDays),
      instrument: this.InventoryModel.instrument,
      bClassCount: Number(this.InventoryModel.bClassCount),
      bclassAvailCount: Number(this.InventoryModel.bClassCount),
      nbClassCount: Number(this.InventoryModel.nbClassCount),
      nBclassAvailableCount: Number(this.InventoryModel.nbClassCount),
      ticketCost: Number(this.InventoryModel.ticketCost),
      rows: Number(this.InventoryModel.rows),
      meal: Number(this.InventoryModel.meal),
      createdBy: localStorage.getItem('userID')
    }
    debugger;
    this._InventoryEvent.EditpostInventoryDetails(Inventorydto).subscribe(res => this.SuccessGet(res), res => this.ErrorGet(res));
    debugger;

  }
  EditpostSuccessGet(res: any) {
    debugger;
    console.log(res);
    if (res.message != null) {
      this.cancel = false;
      this.edited = false;
      this.submit = true;
      this.GetAllinventorys();

      this.Success = res.message;
      Swal.fire(this.Success);
    }
    this.InventoryModel = new InventoryData();
    debugger;

  }
  EditPostErrorGet(res: any) {
    debugger;
    Swal.fire('Something Went Wrong Please try After Some time');
    console.log(res);
  }
}
