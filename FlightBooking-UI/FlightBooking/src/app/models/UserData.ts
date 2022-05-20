import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class UserData{
    email: string='';
    password:string='';
    fullName:string='';
    mobile: string='';
    role:number= 0
    formloginGroup:FormGroup;//Create
    
    /**
     *
     */
    constructor() {
       var _builder=new FormBuilder();
       this.formloginGroup=_builder.group({});

       var validationcollection=[];
       validationcollection.push(Validators.required);
       validationcollection.push(Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"));
       
       //Control==>validation
       this.formloginGroup.addControl("passwordControl",new FormControl('',Validators.required));
       this.formloginGroup.addControl("emailControl",new FormControl('',Validators.compose(validationcollection)));
    }
}
export class RegistorUserData{
    email: string='';
    password:string='';
    fullName:string='';
    mobile: string='';
    role:number= 0
    formRegistorGroup:FormGroup;//Create
    
    /**
     *
     */
    constructor() {
       var _builder=new FormBuilder();
       this.formRegistorGroup=_builder.group({});
       
       var validationcollection=[];
       validationcollection.push(Validators.required);
       validationcollection.push(Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"));
       var mobilevalidationcollection=[];
       mobilevalidationcollection.push(Validators.required);
       mobilevalidationcollection.push(Validators.pattern("[789][0-9]{9}"));
       
       //Control==>validation
       this.formRegistorGroup.addControl("passwordControl",new FormControl('',Validators.required));
       this.formRegistorGroup.addControl("userNameControl",new FormControl('',Validators.required));
       this.formRegistorGroup.addControl("mobileControl",new FormControl('',Validators.compose(mobilevalidationcollection)));
       this.formRegistorGroup.addControl("emailControl",new FormControl('',Validators.compose(validationcollection)));
    }
}