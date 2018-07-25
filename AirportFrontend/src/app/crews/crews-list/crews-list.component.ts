import { Component, OnInit } from '@angular/core';
import { CrewsService } from '../crews.service';
import CrewDto from '../../shared/crewDto';

@Component({
  selector: 'app-crews-list',
  templateUrl: './crews-list.component.html',
  styleUrls: ['./crews-list.component.css']
})
export class CrewsListComponent implements OnInit {

  crews: Array<CrewDto>;
  constructor(private service: CrewsService) {
    this.getAllCrews();
  }

  planetypeDelete(id: number) {
    const number = this.crews.findIndex(item => (item['id'] == id));
    this.crews.splice(number, 1);
    this.service.deleteCrew(id).subscribe();
  }

  getAllCrews() {
    this.service.getCrews().subscribe((data: Array<CrewDto>) => {
      this.crews = data;
      console.log(this.crews);
    });
   
  }

  crewUpdate(id: number) {
    const crew = new CrewDto(5, "2",[26,27]);
    this.service.updateCrew(id, crew).subscribe();
    const updating = this.crews.find(item => item['id'] == id);
    updating.pilotId= crew.pilotId;
    updating.stewardessIds = crew.stewardessIds;
   }

   crewCreate()
  {
    const crew = new CrewDto(5, "1",[2,8]);
    this.service.createCrew(crew).subscribe(()=>this.getAllCrews());
  }
  ngOnInit() {
  }


}
