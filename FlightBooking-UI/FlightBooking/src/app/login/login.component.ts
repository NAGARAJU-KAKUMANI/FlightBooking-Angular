import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserData } from '../models/UserData';
import { AuthService } from '../services/login.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent  implements OnInit {
  loginUserData: UserData = new UserData();
   returnUrl: string='';
  constructor(private _auth: AuthService, private _router: Router,private route: ActivatedRoute) {
    //   this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    //  console.log(this.returnUrl);
   }

  ngOnInit(): void {
     // reset login status
    //  this._auth.logoutUser();

     // get return url from route parameters or default to '/'
     
     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
     console.log(this.returnUrl);
  }
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
      if(this.returnUrl=='')
      {
      this._router.navigate(['/home'])
      }
      else
      {
        this._router.navigateByUrl(this.returnUrl)
      }
     
     
    },
      err => {
        Swal.fire('Invalid User details');
        this.satus="Invalid User details"
      })
  }
  hasError(typeofvalidator:string,controlname:string):boolean{
    return this.loginUserData.formloginGroup.controls[controlname].hasError(typeofvalidator);
  }
}
