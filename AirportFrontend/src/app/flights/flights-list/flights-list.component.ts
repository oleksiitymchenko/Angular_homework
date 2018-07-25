import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../flights.service';
import FlightDTO from 'src/app/shared/flightDto';

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css']
})
export class FlightsListComponent implements OnInit {

  flights: Array<FlightDTO>;
  constructor(private service: FlightsService) {
    this.getAllFlights();
  }

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

  flightUpdate(id: number) {
    const flight = new FlightDTO(4,"MH-17UPT","Kiev","2018-05-01 7:34:42Z","Moscow","2018-05-01 9:34:42Z",[1,2]);
    this.service.updateFlight(id, flight).subscribe();
    const updating = this.flights.find(item => item['id'] == id);
    updating.startPoint = flight.startPoint;
    updating.startTime = flight.startTime;
    updating.finishPoint = flight.finishPoint;
    updating.finishTime = flight.finishTime;
    updating.ticketIds = flight.ticketIds;
   }

   flightCreate()
  {
    const flight = new FlightDTO(4,"MH-17CRE","Kiev","2018-05-01 7:34:42Z","Moscow","2018-05-01 9:34:42Z",[1,2]);
    this.service.createFlight(flight).subscribe(()=>this.getAllFlights());
  }
  ngOnInit() {
  }


}
