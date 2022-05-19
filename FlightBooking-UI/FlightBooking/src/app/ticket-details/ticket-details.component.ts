import { Component, OnInit } from '@angular/core';
import { ticketService } from '../services/ticket.serve';
import { TicketData, Ticket } from '../models/ticketData';
import { AuthService } from '../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
})
export class TicketDetailsComponent implements OnInit {

  Success: string = '';
  CancelStatus: string = '';
  ticketmodel: Ticket = new Ticket();
  ticketModels: Array<TicketData> = new Array<TicketData>();
  ticketdatamodel: TicketData = new TicketData();
  constructor(public _ticketevent: ticketService, private _authService: AuthService, private _router: Router,
    private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe(data => {
      this.ticketmodel.ticketID = data.get('pnr') || '';
    });
  }
  ngOnInit(): void {
  }

  GetTicketDetails() {
    debugger;
    console.log(this.ticketmodel);
    this._ticketevent.GetDetails(this.ticketmodel.ticketID).subscribe(res => this.SuccessGet(res), res => this.ErrorGet(res))
  }
  SuccessGet(res: any) {
    console.log(res);
    this.ticketModels = res;
    if (res.length == 0) {
      debugger;
      alert('No Data Found With this Ticket ID');

    }
  }
  ErrorGet(res: any) {
    debugger;
    console.log(res);
  }
  hasError(typeofvalidator: string, controlname: string): boolean {
    return this.ticketmodel.formbookingGroup.controls[controlname].hasError(typeofvalidator);
  }
  cancelTicket(input: TicketData) {
    debugger;
    if (input.status == 1) {
      // this._router.navigate(['/ticket'])

      return alert('Ticket Already Canceled');
    }
    if (!this._authService.loggedIn()) {
      return this._router.navigate(['/login']);
    }
    debugger;
    console.log(input.ticketID);
    this._ticketevent.CancelTicket(input.ticketID).subscribe(res => this.SuccessGetCancel(res), res => this.ErrorGetCancel(res))

  }
  SuccessGetCancel(res: any) {
    debugger;
    console.log(res);
    if (res.cancelStatus == 'cancel') {
      this.GetTicketDetails();
      alert('Ticket Canceled Successfully' + res.ticketID);
    }

  }
  ErrorGetCancel(res: any) {
    debugger;
    console.log(res);
  }

}
