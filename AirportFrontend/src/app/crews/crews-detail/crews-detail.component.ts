import { Component, OnInit } from '@angular/core';
import { CrewsService } from '../crews.service';
import { ActivatedRoute } from '@angular/router';
import CrewDto from '../../shared/crewDto';

@Component({
  selector: 'app-crews-detail',
  templateUrl: './crews-detail.component.html',
  styleUrls: ['./crews-detail.component.css'],
  providers: [CrewsService]
})
export class CrewsDetailComponent implements OnInit {
  crew:CrewDto;
    id:number;
  stewardessids: number[];

  constructor(private service: CrewsService, private route: ActivatedRoute) { 
  }
  crewUpdate(id: number,crew:CrewDto) {
    crew.stewardessIds=this.stewardessids;
    this.service.updateCrew(id, crew).subscribe();
   }

  ngOnInit() {
    this.route.params.subscribe(params=>this.id=params['id'])
    this.service.getOneCrew(this.id)
    .subscribe((data:CrewDto)=>{this.crew=data;console.log(this.crew)});
  }
}
import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../flights.service';
import { ActivatedRoute } from '@angular/router';
import FlightDTO from '../../shared/flightDto';
import TicketDto from 'src/app/shared/ticketDto';
import { TicketsService } from 'src/app/tickets/tickets.service';

@Component({
  selector: 'app-flights-detail',
  templateUrl: './flights-detail.component.html',
  styleUrls: ['./flights-detail.component.css'],
  providers: [FlightsService]
})
export class FlightsDetailComponent implements OnInit {
    flight:FlightDTO;
    id:number;
    tickets: Array<TicketDto>;
    ticketids:number[];
    ticketid : number;
    allowchange:boolean;

  constructor(private service: FlightsService, private tserv:TicketsService,private route: ActivatedRoute) { 
    this.route.params.subscribe(params=>this.id=params['id'])
    this.service.getOneFlight(this.id)
    .subscribe((data:FlightDTO)=>{this.flight=data;
                                  console.log(this.flight);
                                  this.tserv.getTickets().subscribe(
                                        (data:Array<TicketDto>)=>this.tickets=data);});
    this.allowchange=false;
    this.ticketids=[];
  }
  AddTicket(id: number,ticketids:number[])
  {

    ticketids.push(id);
    const number = this.tickets.findIndex(item => (item['id'] == id));
    this.tickets.splice(number, 1);
 }
  onUpdateClick()
  {
    this.allowchange=true;
  }
  flightSaveUpdates(id: number,flight:FlightDTO) {
    flight.ticketIds=this.ticketids;
    this.service.updateFlight(id, flight).subscribe((res:Response)=>console.log(res));
    

   }
  ngOnInit() {
    
  }
}
