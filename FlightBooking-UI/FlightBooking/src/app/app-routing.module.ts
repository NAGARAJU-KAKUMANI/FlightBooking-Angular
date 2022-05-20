import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { LoginComponent } from './login/login.component';
import { SearchFlightsComponent } from './search-flights/search-flights.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { AuthGaurd } from './services/auth.gaurd';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'Searchflights',
    component:SearchFlightsComponent
  },
  {
    path: 'inventory',
    component:InventoryComponent
  }
  ,
  {
    path: 'login',
    component:LoginComponent
  },
  
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'ticket',
    component: TicketDetailsComponent
  },
  
  {
    path: 'book',
    canActivate:[AuthGaurd],
    component: BookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
