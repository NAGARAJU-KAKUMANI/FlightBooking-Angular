import { NgForm,FormGroup,Validators,FormBuilder, FormControl } from "@angular/forms";
//create
//connect
//check
export class BookflightsData{
  flightNumber: string='';
  dateOfJourney: string='';
  fromPlace: string='';
  toPlace:string='';
  boardingTime: string='';
  emailID:string='';
  createdBy: string='';
  seattype: number=0;
  userName: string='';
  passportNumber: string='';
  age: number=0;
//   bookingusers:List<bookingUsers>=new List<bookingUsers>();
  formbookingGroup:FormGroup;//Create

    /**
     *
     */
    constructor() {
       var _builder=new FormBuilder();
       this.formbookingGroup=_builder.group({});
       var validationcollection=[];
       validationcollection.push(Validators.required);
       validationcollection.push(Validators.pattern("^[1-9][0-9]*$"));
       //Control==>validation
       this.formbookingGroup.addControl("userNameControl",new FormControl('',Validators.required));
       this.formbookingGroup.addControl("passportNumberControl",new FormControl('',Validators.required));
       this.formbookingGroup.addControl("seattypeControl",new FormControl('',Validators.required));
       this.formbookingGroup.addControl("agetControl",new FormControl('',Validators.compose(validationcollection)));
    }
}

