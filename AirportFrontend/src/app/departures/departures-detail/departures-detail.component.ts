import { Component, OnInit } from '@angular/core';
import { DeparturesService } from '../departures.service';
import { ActivatedRoute } from '@angular/router';
import DepartureDto from '../../shared/departureDto';
import CrewDto from '../../shared/crewDto';
import PlaneDto from 'src/app/shared/planeDto';
import { PlanesService } from '../../planes/planes.service';
import { CrewsService } from '../../crews/crews.service';

@Component({
  selector: 'app-departures-detail',
  templateUrl: './departures-detail.component.html',
  styleUrls: ['./departures-detail.component.css'],
  providers: [DeparturesService, PlanesService,CrewsService]
})
export class DeparturesDetailComponent implements OnInit {
    departure:DepartureDto;
    crew:CrewDto;
    plane:PlaneDto;
    id:number;
    allowchange:boolean;

  constructor(private service: DeparturesService, 
    private route: ActivatedRoute,
    private pserv: PlanesService,
    private cserv: CrewsService
  ) { 
    this.departure=new DepartureDto(undefined,undefined,undefined,undefined,undefined);
    this.route.params.subscribe(params=>this.id=params['id'])
    this.service.getOneDeparture(this.id)
    .subscribe((data:DepartureDto)=>{this.departure=data;console.log(this.departure);
      pserv.getOnePlane(this.departure.planeId).subscribe((data:PlaneDto)=>this.plane=data);
      cserv.getOneCrew(this.departure.crewId).subscribe((data:CrewDto)=>this.crew=data);});
    this.allowchange = false;
    console.log(this.plane);
    console.log(this.crew);
  }
  onUpdateClick()
  {
    this.allowchange = true;
  }

  departureUpdate(id: number,departure:DepartureDto) {
    /*const departure = new DepartureDto(2,"MH-17UPT","2018-05-01 7:45:42Z",1,11);*/
    this.service.updateDeparture(id, departure).subscribe((res:Response)=>console.log(res));
   }

  ngOnInit() {
   
  }
}
