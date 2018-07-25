import { Component, OnInit } from '@angular/core';
import { PilotsService } from '../pilots.service';
import PilotDto from '../../shared/pilotDto';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-pilots-detail',
  templateUrl: './pilots-detail.component.html',
  styleUrls: ['./pilots-detail.component.css'],
  providers: [PilotsService]
})
export class PilotsDetailComponent implements OnInit {
    pilot:PilotDto;
    id:number;

  constructor(private service: PilotsService, private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.route.params.subscribe(params=>this.id=params['id'])
    this.service.getOnePilot(this.id)
    .subscribe((data:PilotDto)=>{this.pilot=data;console.log(this.pilot)});
  }
}
