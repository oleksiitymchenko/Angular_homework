import { Component, OnInit } from '@angular/core';
import { CrewsService } from '../crews.service';
import { ActivatedRoute } from '@angular/router';
import CrewDto from '../../shared/crewDto';
import StewardessDto from 'src/app/shared/stewardessDto';
import PilotDto from 'src/app/shared/pilotDto';
import { StewardessService } from 'src/app/stewardess/stewardess.service';
import { PilotsService } from 'src/app/pilots/pilots.service';

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
  stewardessId:number;
  stewardesses:Array<StewardessDto>;
  pilots:Array<PilotDto>;
  allowchange:boolean;

  constructor(private service: CrewsService,private stserv:StewardessService, private pserv:PilotsService, private route: ActivatedRoute) { 
    this.route.params.subscribe(params=>this.id=params['id'])
    this.service.getOneCrew(this.id)
    .subscribe((data:CrewDto)=>{this.crew=data;console.log(this.crew);
      this.stserv.getStewardesses().subscribe((data:Array<StewardessDto>)=>this.stewardesses=data);
      this.pserv.getPilots().subscribe((data:Array<PilotDto>)=>this.pilots=data);});
    this.stewardessids=[undefined];
    
    this.allowchange=false;
  }
  crewSaveUpdates(id: number,crew:CrewDto) {
    this.stewardessids.shift();
    crew.stewardessIds=this.stewardessids;
    this.service.updateCrew(id, crew).subscribe();
   }
   onUpdateClick()
   {
     this.allowchange=true;
   } 
   AddStewardess(id: number,stewardessids:number[])
   {
     stewardessids.push(id);
     console.log(stewardessids);
     const number = this.stewardesses.findIndex(item => (item['id'] == id));
     this.stewardesses.splice(number, 1);
  }
  ngOnInit() {
  
  }
  onSubmit()
  {

  }
}
