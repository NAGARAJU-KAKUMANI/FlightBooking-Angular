import { NgForm,FormGroup,Validators,FormBuilder, FormControl } from "@angular/forms";
//create
//connect
//check
export class flightsData{
    fromPlace:string='';
    toPlace:string='';
startTime:string='';
nBclassAvailableCount:number=0;
ticketCost:string='';
inventoryId:number=0;
flightNumber:string='';
bclassAvailCount:number=0;
name='';
startDate:string='';
endDate:string='';
meal:string='';
}
export class flightSearch{
    fromDate:Date=new Date();
    fromPlace:string='';
    toplace:string='';

    formCustomerGroup:FormGroup;//Create

    /**
     *
     */
    constructor() {
       var _builder=new FormBuilder();
       this.formCustomerGroup=_builder.group({});
      this.fromDate
       //Control==>validation
       this.formCustomerGroup.addControl("dateofJourneyControl",new FormControl('',Validators.required));
       this.formCustomerGroup.addControl("fromplaceControl",new FormControl('',Validators.required));
       this.formCustomerGroup.addControl("toplaceControl",new FormControl('',Validators.required));
    }
   
}

