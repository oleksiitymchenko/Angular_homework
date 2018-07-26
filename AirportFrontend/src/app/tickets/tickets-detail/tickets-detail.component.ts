import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../tickets.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

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
    allowchange:boolean;

    profileForm = new FormGroup({
      number: new FormControl(''),
      price: new FormControl(''),
    });

  constructor(private service: TicketsService, private route: ActivatedRoute) { 
    this.route.params.subscribe(params=>this.id=params['id']);
    this.service.getOneTicket(this.id)
    .subscribe((data:TicketDto)=>{this.ticket=data;console.log(this.ticket)});
    this.allowchange=false;
  }
  
  onUpdateClick()
  {
    this.allowchange=true;
  }

  ticketSaveUpdates(id: number,ticket) {
    console.log(id);
    console.log(ticket);
    this.service.updateTicket(id, ticket).subscribe(()=>console.log(ticket));
   }

 

  ngOnInit() {
  
  }
}
