import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../flights.service';
import FlightDTO from 'src/app/shared/flightDto';
import { HttpResponse } from '../../../../node_modules/@types/selenium-webdriver/http';
import TicketDto from 'src/app/shared/ticketDto';
import { TicketsService } from '../../tickets/tickets.service';

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css']
})
export class FlightsListComponent implements OnInit {

  flights: Array<FlightDTO>;
  tickets: Array<TicketDto>;
  flightCreating:FlightDTO;
  ticketids:number[];
  ticketid : number;
  creating:boolean;
  allowchange: boolean;

  constructor(private service: FlightsService, private tserv:TicketsService) {
    this.getAllFlights();
    this.creating=false;
    tserv.getTickets().subscribe((data:Array<TicketDto>)=>this.tickets=data);
    this.flightCreating=new FlightDTO(undefined,undefined,undefined,undefined,undefined,undefined,undefined);
  }
  AddTicket(id: number)
  {
    this.ticketids.push(id);
    const number = this.tickets.findIndex(item => (item['id'] == id));
    this.tickets.splice(number, 1);
 }
 /* getAllTickets(flights:Array<FlightDTO>)
  {
    this.tickets.push(flights.forEach((value)=>console.log(value)))
  }*/

 flightDelete(id: number) {
    const number = this.flights.findIndex(item => (item['id'] == id));
    this.flights.splice(number, 1);
    this.service.deleteFlight(id).subscribe();
  }

  getAllFlights() {
    this.service.getFlights().subscribe((data: Array<FlightDTO>) => {
      this.flights = data;
  console.log(this.flights);
    });
   
  }

  flightSaveUpdates(id: number,flight:FlightDTO) {
    this.service.updateFlight(id, flight).subscribe((res:Response)=>console.log(res));
    const updating = this.flights.find(item => item['id'] == id);

   }
   onUpdateClick()
   {
     this.allowchange = true;
   }
 
   flightCreate(flight:FlightDTO)
  {
    flight.ticketIds=this.ticketids;
    console.log(flight);
    this.service.createFlight(flight).subscribe((response:Response) =>{console.log(response);this.getAllFlights();});
    }
  ngOnInit() {
  }
}
