import { Component, OnInit } from '@angular/core';
import { DeparturesService } from '../departures.service';
import DepartureDto from '../../shared/departureDto';
import PlaneDto from '../../shared/planeDto';
import CrewDto from 'src/app/shared/crewDto';
import { PlanesService } from 'src/app/planes/planes.service';
import { CrewsService } from 'src/app/crews/crews.service';
import PilotDto from '../../shared/stewardessDto';

@Component({
  selector: 'app-departures-list',
  templateUrl: './departures-list.component.html',
  styleUrls: ['./departures-list.component.css']
})
export class DeparturesListComponent implements OnInit {

  departures: Array<DepartureDto>;
  departureCreating: DepartureDto;
  date:string;
  time:string;
  creating:boolean;

  planes:Array<PlaneDto>;
  crews:Array<CrewDto>;
  crewId : number;
  aircraftId : number;


  constructor(private service: DeparturesService, 
    private planesService: PlanesService,
    private crewsService: CrewsService,) 
    {
    this.departureCreating = new DepartureDto(undefined,undefined,undefined,undefined,undefined);
    this.getAllDepartures();
    this.creating = false;
    planesService.getPlanes()
      .subscribe((data:Array<PlaneDto>)=>{this.planes=data; });

    crewsService.getCrews()
      .subscribe((data:Array<CrewDto>)=>{this.crews = data; });
    console.log(this.planes);
    console.log(this.crews);
  }

  compareByOptionId(idFist, idSecond) {
    return idFist && idSecond && idFist.id == idSecond.id;
 }

  creatingProcess()
  {
    const x = !this.creating;
    this.creating=x;
    console.log(this.planes);
    console.log(this.crews);
  }

 departureDelete(id: number) {
    const number = this.departures.findIndex(item => (item['id'] == id));
    this.departures.splice(number, 1);
    this.service.deleteDeparture(id).subscribe((res:Response)=>console.log(res));
  }

  getAllDepartures() {
    this.service.getDepartures().subscribe((data: Array<DepartureDto>) => {
      this.departures = data;
      console.log(this.departures);
    });
    console.log(this.departures);
   
  }

  departureUpdate(id: number,departure:DepartureDto) {
    /*const departure = new DepartureDto(2,"MH-17UPT","2018-05-01 7:45:42Z",1,11);*/
    this.service.updateDeparture(id, departure).subscribe();
   }

  departureCreate(departure: DepartureDto)
  { console.log('create called');
    console.log(departure);
    /*const departure = new DepartureDto(2,"MH-17CRE","2018-05-01 7:45:42Z",1,11);*/
    this.service.createDeparture(departure).subscribe((res:Response)=>{console.log(res); this.getAllDepartures();});
  }


  ngOnInit() {    this.getAllDepartures();

  }


}
