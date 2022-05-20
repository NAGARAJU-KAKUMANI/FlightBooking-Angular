import { Component, OnInit } from '@angular/core';
import { InventoryData } from '../models/inventoryData';
import { InventoryService } from '../services/Inventory.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',

})
export class InventoryComponent implements OnInit {

  Inventorys:Array<InventoryData> = new Array<InventoryData>();
  InventoryModel: InventoryData = new InventoryData();
  Success:string='';
  constructor(public _InventoryEvent:InventoryService) { }

  PostInventoryDetails(){
    if(Number(this.InventoryModel.airLineId)==0)
    {
      return alert('Select Airline Name')
    }
    if(Number(this.InventoryModel.scheduledDays)==0)
    {
      return alert('Select Schedule Days')
    }
    if(Number(this.InventoryModel.meal)==0)
    {
      return alert('Select Schedule Days')
    }
    var Inventorydto={
      flightNumber:this.InventoryModel.flightNumber,
      airLineId:Number(this.InventoryModel.airLineId),
      fromPlace:this.InventoryModel.fromPlace,
      toPlace:this.InventoryModel.toPlace,
      startDate:this.InventoryModel.startDate,
      endDate:this.InventoryModel.endDate,
      startTime:this.InventoryModel.startTime,
      endTime:this.InventoryModel.endTime,
      scheduledDays:Number(this.InventoryModel.scheduledDays),
      instrument:this.InventoryModel.instrument,
      bClassCount:Number(this.InventoryModel.bClassCount),
      bclassAvailCount:Number(this.InventoryModel.bClassCount),
      nbClassCount:Number(this.InventoryModel.nbClassCount),
      nBclassAvailableCount:Number(this.InventoryModel.nbClassCount),
      ticketCost:Number(this.InventoryModel.ticketCost),
      rows:Number(this.InventoryModel.rows),
      meal:Number(this.InventoryModel.meal),
      createdBy:localStorage.getItem('userID')
    }
     debugger;
     this._InventoryEvent.postInventoryDetails(Inventorydto).subscribe(res=>this.SuccessGet(res),res=>this.ErrorGet(res))
     
    }
    SuccessGet(res:any){
      console.log(res);
      if(res.message !=null)
      {
         this.Success=res.message;
      }
      this.InventoryModel = new InventoryData();
      debugger;
     
    }
    ErrorGet(res:any){ 
       debugger;  
      console.log(res);
    }
  ngOnInit(): void {
  }
  changeairline(e:any) {
    let option = e.target.value;
   debugger;
   if(option==0)
   {
    this.InventoryModel.formInventoryGroup.controls['airLineId'].setValidators([
      Validators.required
     ]);
   }
    console.log(e.target.value);
  }
  changemeal(e:any) {
    let option = e.target.value;
   debugger;
   if(option==0)
   {
    this.InventoryModel.formInventoryGroup.controls['mealControl'].setValidators([
      Validators.required
     ]);
   }
    console.log(e.target.value);
  }
  changeSchedule(e:any) {
    let option = e.target.value;
    debugger;
   if(option==0)
   {
    this.InventoryModel.formInventoryGroup.controls['scheduledDaysControl'].valueChanges;
   }
    console.log(e.target.value);
  }

  hasError(typeofvalidator:string,controlname:string):boolean{
    return this.InventoryModel.formInventoryGroup.controls[controlname].hasError(typeofvalidator);
  }
}
