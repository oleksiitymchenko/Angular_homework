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

  constructor(private service: CrewsService, private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.route.params.subscribe(params=>this.id=params['id'])
    this.service.getOneCrew(this.id)
    .subscribe((data:CrewDto)=>{this.crew=data;console.log(this.crew)});
  }
}
