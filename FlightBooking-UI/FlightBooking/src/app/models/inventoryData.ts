import { NgForm,FormGroup,Validators,FormBuilder, FormControl } from "@angular/forms";

export class InventoryData{
    flightNumber:string='';
    airLineId: number=0;
    fromPlace: string='';
    toPlace: string='';
    startDate:Date= new Date();
    endDate: Date= new Date();
    startTime: string='';
    endTime: string='';
    scheduledDays: number=0;
    instrument: string='';
    bClassCount:number=0;
    bclassAvailCount: number=0;
    nbClassCount: number=0;
    nBclassAvailableCount: number=0;
    ticketCost: number=0;
    rows: number=0;
    meal: number=0;
    createdBy: string='user1';

    formInventoryGroup:FormGroup;//Create

    /**
     *
     */
    constructor() {
       var _builder=new FormBuilder();
       this.formInventoryGroup=_builder.group({});
      
    //    var validationcollection=[];
    //    validationcollection.push(Validators.required);
    //    validationcollection.push(Validators.pattern("^[0-9]{4,4}$"));
       var validationcollection=[];
       validationcollection.push(Validators.required);
       validationcollection.push(Validators.pattern("^[1-9][0-9]*$"));

       //Control==>validation
       this.formInventoryGroup.addControl("flightNumberControl",new FormControl('',Validators.required));
       this.formInventoryGroup.addControl("airLineIdControl",new FormControl('',Validators.required));
       this.formInventoryGroup.addControl("fromPlaceControl",new FormControl('',Validators.required));
       this.formInventoryGroup.addControl("toPlaceControl",new FormControl('',Validators.required));
       this.formInventoryGroup.addControl("startDateControl",new FormControl('',Validators.required));
       this.formInventoryGroup.addControl("endDateControl",new FormControl('',Validators.required));
       this.formInventoryGroup.addControl("startTimeControl",new FormControl('',Validators.required));
       this.formInventoryGroup.addControl("endTimeControl",new FormControl('',Validators.required));
       this.formInventoryGroup.addControl("scheduledDaysControl",new FormControl('',Validators.required));
       this.formInventoryGroup.addControl("instrumentControl",new FormControl('',Validators.required));
       this.formInventoryGroup.addControl("bClassCountControl",new FormControl('',Validators.compose(validationcollection)));
       this.formInventoryGroup.addControl("nbClassCountControl",new FormControl('',Validators.compose(validationcollection)));
       this.formInventoryGroup.addControl("ticketCostControl",new FormControl('',Validators.required));
       this.formInventoryGroup.addControl("rowsControl",new FormControl('',Validators.compose(validationcollection)));
       this.formInventoryGroup.addControl("mealControl",new FormControl('',Validators.compose(validationcollection)));
    }
}

export class ALLInventoryData{
   flightNumber:string='';
   name: string='';
   fromPlace: string='';
   toPlace: string='';
   startDate:Date= new Date();
   endDate: Date= new Date();
   startTime: string='';
   endTime: string='';
   scheduledDays: number=0;
   instrument: string='';
   bClassCount:number=0;
   bclassAvailCount: number=0;
   nbClassCount: number=0;
   nBclassAvailableCount: number=0;
   ticketCost: number=0;
   rows: number=0;
   meal: string='';
}
export class AirlineData{
   airlineId: number=0;
   name: string='';
   address: string='';
   contactNumber:string='';
 }