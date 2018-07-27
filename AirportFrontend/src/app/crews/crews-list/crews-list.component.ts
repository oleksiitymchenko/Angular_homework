import { Component, OnInit } from '@angular/core';
import { CrewsService } from '../crews.service';
import CrewDto from '../../shared/crewDto';
import StewardessDto from 'src/app/shared/stewardessDto';
import { StewardessService } from 'src/app/stewardess/stewardess.service';
import { PilotsService } from 'src/app/pilots/pilots.service';
import PilotDto from 'src/app/shared/pilotDto';

@Component({
  selector: 'app-crews-list',
  templateUrl: './crews-list.component.html',
  styleUrls: ['./crews-list.component.css']
})
export class CrewsListComponent implements OnInit {

  crews: Array<CrewDto>;
  crewCreating:CrewDto;
  stewardessids:number[];
  stewardessId:number;
  stewardesses:Array<StewardessDto>;
  pilots:Array<PilotDto>;
  creating:boolean;

  constructor(private service: CrewsService, private stserv:StewardessService, private pserv:PilotsService) {
    this.getAllCrews();
    this.stewardessids=[undefined];
    this.stserv.getStewardesses().subscribe((data:Array<StewardessDto>)=>this.stewardesses=data);
    this.pserv.getPilots().subscribe((data:Array<PilotDto>)=>this.pilots=data);
    this.creating=false;
    this.crewCreating=new CrewDto(undefined,undefined,undefined);
  }

  crewDelete(id: number) {
    const number = this.crews.findIndex(item => (item['id'] == id));
    this.crews.splice(number, 1);
    this.service.deleteCrew(id).subscribe();
  }
  AddStewardess(id: number,stewardessids:number[])
  {
    stewardessids.push(id);
    console.log(stewardessids);
    const number = this.stewardesses.findIndex(item => (item['id'] == id));
    this.stewardesses.splice(number, 1);
 }

creatingProcess()
{
  this.creating=true;
}

  getAllCrews() {
    this.service.getCrews().subscribe((data: Array<CrewDto>) => {
      this.crews = data;
      console.log(this.crews);
    });
  }

   crewCreate(crew:CrewDto)
  {
    this.stewardessids.shift();
    crew.stewardessIds=this.stewardessids;
    console.log(crew);
    this.service.createCrew(crew).subscribe(()=>this.getAllCrews());
  }
  ngOnInit() {
  }
onSubmit(){
  
}

}
