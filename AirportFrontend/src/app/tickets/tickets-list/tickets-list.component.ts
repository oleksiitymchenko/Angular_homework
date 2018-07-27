import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../tickets.service';
import TicketDto from '../../shared/ticketDto';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css']
})
export class TicketsListComponent implements OnInit {

  tickets: Array<TicketDto>;
  ticketCreating:TicketDto;
  creating:boolean;

  constructor(private ticketsServise: TicketsService) {
    this.getAllTickets();
    this.ticketCreating=new TicketDto(undefined,undefined,undefined);
    this.creating=false;
  }

  getAllTickets() {
    this.ticketsServise.getTickets()
      .subscribe((data: Array<TicketDto>) => {
        this.tickets = data;
        (res:Response)=>console.log(res);
    });
   
  }

  creatingProcess()
  {
    const x = !this.creating;
    this.creating=x;
  }

  ticketDelete(id: number) {
    const number = this.tickets.findIndex(item => (item['id'] == id));
    this.tickets.splice(number, 1);
    this.ticketsServise.deleteTicket(id).subscribe();
  }

  ticketCreate(ticket:TicketDto)
  {
    this.ticketsServise.createTicket(ticket)
      .subscribe((res:Response)=>console.log(res));
    this.getAllTickets();
  }

  ngOnInit() {

  }


}
