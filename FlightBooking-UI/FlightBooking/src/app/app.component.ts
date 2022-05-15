import { Component } from '@angular/core';
import { AuthService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FlightBooking';

  constructor(private _authService:AuthService) {
   
  }

  LogOut(){
    this._authService.logoutUser();
  }

  LoggedIn(input:boolean):boolean{
   
    if(input){
       
      return this._authService.loggedIn();
    }
    else{
      return !this._authService.loggedIn();
    }
  }
  Logged(input:boolean,role:string):boolean{
  
    if(input){
      
      return (this._authService.loggedIn() && localStorage.getItem('role')==role);   
    }
    else{
      return !this._authService.loggedIn();
    }
  }
}
