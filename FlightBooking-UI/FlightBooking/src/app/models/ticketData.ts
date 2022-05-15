import { NgForm,FormGroup,Validators,FormBuilder, FormControl } from "@angular/forms";


export class TicketData{
    ticketID: string='';
    bookingID: string='';
    flightNumber: string='';
    dateOfJourney: string='';
    fromPlace: string='';
    toPlace:string='';
    boardingTime: string='';
    emailID: string='';
    userName: string='';
    passportNumber:string='';
    age:number=0;
    seatNumber:number=0;
    statusstr:string='';
    seattype: number=0;
    ticketType:string='';
    status:number=0;  
}
export class Ticket{
    ticketID: string='';
    formbookingGroup:FormGroup;//Create

    constructor() {
        var _builder=new FormBuilder();
        this.formbookingGroup=_builder.group({});
        var validationcollection=[];
        validationcollection.push(Validators.required);
        validationcollection.push(Validators.pattern("^[1-9][0-9]*$"));
        //Control==>validation
        this.formbookingGroup.addControl("userNameControl",new FormControl('',Validators.required));
     }
}