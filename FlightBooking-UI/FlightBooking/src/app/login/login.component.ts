import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../models/UserData';
import { AuthService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginUserData: UserData = new UserData();
  constructor(private _auth: AuthService, private _router: Router) { }
  satus:string='';
  loginUser() {
    var userdetails={
      email:this.loginUserData.email,
      password:this.loginUserData.password,
      fullName:this.loginUserData.fullName,
      mobile:this.loginUserData.mobile,
      role:this.loginUserData.role
    }
    debugger;
    this._auth.loginUser(userdetails).subscribe(res => {
      localStorage.setItem('token', res.token)
      localStorage.setItem('email', res.email)
      localStorage.setItem('role', res.role)
      localStorage.setItem('userID', res.userID)
      this._router.navigate(['/home'])
    },
      err => {
        this.satus="Invalid User details"
      })
  }
  hasError(typeofvalidator:string,controlname:string):boolean{
    return this.loginUserData.formloginGroup.controls[controlname].hasError(typeofvalidator);
  }
}
