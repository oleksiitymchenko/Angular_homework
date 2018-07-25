import { Component, OnInit } from '@angular/core';
import { StewardessService } from '../stewardess.service';
import PilotDto from '../../shared/pilotDto';
import { ActivatedRoute } from '@angular/router';
import StewardessDto from 'src/app/shared/stewardessDto';

@Component({
  selector: 'app-stewardess-detail',
  templateUrl: './stewardess-detail.component.html',
  styleUrls: ['./stewardess-detail.component.css'],
  providers: [StewardessService]
})
export class StewardessDetailComponent implements OnInit {
  stewardess:StewardessDto;
    id:number;

  constructor(private service: StewardessService, private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.route.params.subscribe(params=>this.id=params['id'])
    this.service.getOneStewardess(this.id)
    .subscribe((data:StewardessDto)=>{this.stewardess=data;console.log(this.stewardess)});
  }
}
