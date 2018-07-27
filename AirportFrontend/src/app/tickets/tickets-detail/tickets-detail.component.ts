import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../tickets.service';
import { ActivatedRoute } from '@angular/router';

import TicketDto from '../../shared/ticketDto';

@Component({
  selector: 'app-tickets-detail',
  templateUrl: './tickets-detail.component.html',
  styleUrls: ['./tickets-detail.component.css'],
})
export class TicketsDetailComponent implements OnInit {

    ticket:TicketDto;
    id:number;
    allowchange:boolean;

  constructor(private service: TicketsService, private route: ActivatedRoute) { 
    this.route.params.subscribe(params=>this.id=params['id']);
    this.service.getOneTicket(this.id)
      .subscribe((data:TicketDto)=>
        {this.ticket=data;
        (res:Response)=>console.log(res)});
    this.allowchange=false;
  }
  
  onUpdateClick()
  {
    this.allowchange=true;
  }

  ticketSaveUpdates(id: number,ticket) {
    console.log(id);
    console.log(ticket);
    this.service.updateTicket(id, ticket).
      subscribe((res:Response)=>console.log(res));
   }

  ngOnInit() {
  
  }
}
