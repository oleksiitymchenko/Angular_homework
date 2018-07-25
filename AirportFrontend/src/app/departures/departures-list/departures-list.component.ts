import { Component, OnInit } from '@angular/core';
import { DeparturesService } from '../departures.service';
import DepartureDto from '../../shared/departureDto';

@Component({
  selector: 'app-departures-list',
  templateUrl: './departures-list.component.html',
  styleUrls: ['./departures-list.component.css']
})
export class DeparturesListComponent implements OnInit {

  departures: Array<DepartureDto>;
  constructor(private service: DeparturesService) {
    this.getAllDepartures();
  }

 departureDelete(id: number) {
    const number = this.departures.findIndex(item => (item['id'] == id));
    this.departures.splice(number, 1);
    this.service.deleteDeparture(id).subscribe();
  }

  getAllDepartures() {
    this.service.getDepartures().subscribe((data: Array<DepartureDto>) => {
      this.departures = data;
      console.log(this.departures);
    });
   
  }

  departureUpdate(id: number) {
    const departure = new DepartureDto(2,"MH-17UPT","2018-05-01 7:45:42Z",1,11);
    this.service.updateDeparture(id, departure).subscribe();
    const updating = this.departures.find(item => item['id'] == id);
    updating.crewId = departure.crewId;
    updating.departureTime = departure.departureTime;
    updating.flightNumber= departure.flightNumber;
    updating.planeId= departure.planeId;

   }

  departureCreate()
  {
    const departure = new DepartureDto(2,"MH-17CRE","2018-05-01 7:45:42Z",1,11);
    this.service.createDeparture(departure).subscribe(()=>this.getAllDepartures());
  }
  ngOnInit() {
  }


}
