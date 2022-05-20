import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFlightsComponent } from './search-flights/search-flights.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { flightService } from './services/flight.service';
import { InventoryComponent } from './inventory/inventory.component';
import { HomeComponent } from './home/home.component';
import { InventoryService } from './services/Inventory.service';
import { BookingComponent } from './booking/booking.component';
import { BookingService } from './services/booking.service';
import { AuthService } from './services/login.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AuthGaurd } from './services/auth.gaurd';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { ticketService } from './services/ticket.serve';

@NgModule({
  declarations: [
    AppComponent,
    SearchFlightsComponent,
    InventoryComponent,
    HomeComponent,
    BookingComponent,
    LoginComponent,
    RegisterComponent,
    TicketDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [flightService,InventoryService,BookingService,ticketService,AuthService,AuthGaurd,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
