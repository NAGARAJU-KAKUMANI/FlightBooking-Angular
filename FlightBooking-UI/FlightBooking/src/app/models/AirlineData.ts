import { NgForm,FormGroup,Validators,FormBuilder, FormControl } from "@angular/forms";
//create
//connect
//check
export class AirlineData{
    airlineId: number=0;
    name: string='';
    address: string='';
    contactNumber:string='';
 
  formAirlineGroup:FormGroup;//Create

    /**
     *
     */
    constructor() {
       var _builder=new FormBuilder();
       this.formAirlineGroup=_builder.group({});
       var mobilevalidationcollection=[];
       mobilevalidationcollection.push(Validators.required);
       mobilevalidationcollection.push(Validators.pattern("[789][0-9]{9}"));
       //Control==>validation
       this.formAirlineGroup.addControl("airlineNameControl",new FormControl('',Validators.required));
       this.formAirlineGroup.addControl("addressControl",new FormControl('',Validators.required));
      //  this.formbookingGroup.addControl("seattypeControl",new FormControl('',Validators.required));
       this.formAirlineGroup.addControl("contactNumberControl",new FormControl('',Validators.compose(mobilevalidationcollection)));
    }
}


