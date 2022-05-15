import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistorUserData, UserData } from '../models/UserData';
import { AuthService } from '../services/login.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent  {
 status:string='';
  registerUserData: RegistorUserData = new RegistorUserData();
  constructor(private _auth: AuthService, private _router: Router) { }
  registerUser() {
    var userdetails={
      email:this.registerUserData.email,
      password:this.registerUserData.password,
      fullName:this.registerUserData.fullName,
      mobile:this.registerUserData.mobile,
      role:this.registerUserData.role
    }
    debugger;
    this._auth.registerUser(userdetails).subscribe(res => {
      localStorage.setItem('token', res.token)
      localStorage.setItem('email', res.email)
      localStorage.setItem('role', res.role)
      localStorage.setItem('userID', res.userID)
      this._router.navigate(['/home'])
    },
      err => {
        this.status="Fail to register"
      })
  }
  hasError(typeofvalidator:string,controlname:string):boolean{
    return this.registerUserData.formRegistorGroup.controls[controlname].hasError(typeofvalidator);
  }
}
