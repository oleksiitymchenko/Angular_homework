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
  constructor(private ticketsServise: TicketsService) {
    this.getAllTickets();
  }

  stewardessDelete(id: number) {
    const number = this.tickets.findIndex(item => (item['id'] == id));
    this.tickets.splice(number, 1);
    this.ticketsServise.deleteTicket(id).subscribe();
  }

  getAllTickets() {
    this.ticketsServise.getTickets().subscribe((data: Array<TicketDto>) => {
      this.tickets = data;
    });
  }

  ticketUpdate(id: number) {
    const ticket = new TicketDto(5, 200, "MH-18");
    this.ticketsServise.updateTicket(id, ticket).subscribe();
    const updating = this.tickets.find(item => item['id'] == id);
    updating['price'] = ticket['price'];
    updating['number'] = ticket['number'];
   }

  ticketCreate()
  {
    const ticket = new TicketDto(5, 200, "AA7777AA");
    this.ticketsServise.createTicket(ticket).subscribe();
    this.getAllTickets();
  }

  ngOnInit() {

  }


}
