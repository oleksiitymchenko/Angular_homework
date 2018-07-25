import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../tickets.service';
import { ActivatedRoute } from '@angular/router';
import TicketDto from '../../shared/ticketDto';

@Component({
  selector: 'app-tickets-detail',
  templateUrl: './tickets-detail.component.html',
  styleUrls: ['./tickets-detail.component.css'],
  providers: [TicketsService]
})
export class TicketsDetailComponent implements OnInit {
  ticket:TicketDto;
    id:number;

  constructor(private service: TicketsService, private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.route.params.subscribe(params=>this.id=params['id'])
    this.service.getOneTicket(this.id)
    .subscribe((data:TicketDto)=>{this.ticket=data;console.log(this.ticket)});
  }
}
