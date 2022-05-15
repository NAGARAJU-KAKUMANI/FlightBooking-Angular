import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
Status:string='';

  constructor() {
    var role =localStorage.getItem('role');
    if(role=="0")
    {
      this.Status="User Home Page"
    }
    if(role=="1")
    {
      this.Status="Admin Home Page"
    }
   }

  ngOnInit(): void {
  }

}
