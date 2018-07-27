import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../flights.service';
import FlightDTO from 'src/app/shared/flightDto';
import { HttpResponse } from '../../../../node_modules/@types/selenium-webdriver/http';
import TicketDto from 'src/app/shared/ticketDto';

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css']
})
export class FlightsListComponent implements OnInit {

  flights: Array<FlightDTO>;
  tickets: Array<TicketDto>;
  creating:boolean;
  allowchange: boolean;
  constructor(private service: FlightsService) {
    this.getAllFlights();
    this.creating=false;
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
    /*const flight = new FlightDTO(4,"MH-17UPT","Kiev","2018-05-01 7:34:42Z","Cairo","2018-05-01 9:34:42Z",[6,8]);
    */this.service.updateFlight(id, flight).subscribe((res:Response)=>console.log(res));
    const updating = this.flights.find(item => item['id'] == id);

   }
   onUpdateClick()
   {
     this.allowchange = true;
   }
 
   flightCreate()
  {
    const tickets = [10,12]
    const flight = new FlightDTO(4,"MH-17CRE","Kiev","2018-05-01 7:34:42Z","Moscow","2018-05-01 9:34:42Z",tickets);
    console.log(flight);
    this.service.createFlight(flight).subscribe((response:Response) =>{console.log(response);this.getAllFlights();});
    }
  ngOnInit() {
  }
}
