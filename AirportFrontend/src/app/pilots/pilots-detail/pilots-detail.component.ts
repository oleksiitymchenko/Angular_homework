import { Component, OnInit } from '@angular/core';
import { PilotsService } from '../pilots.service';
import PilotDto from '../../shared/pilotDto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pilots-detail',
  templateUrl: './pilots-detail.component.html',
  styleUrls: ['./pilots-detail.component.css'],
  providers: [PilotsService]
})
export class PilotsDetailComponent implements OnInit {
    pilot:PilotDto;
    id:number;
    creating:boolean;

  constructor(private service: PilotsService, private route: ActivatedRoute) {
    this.route.params.subscribe(params=>this.id=params['id'])
    this.service.getOnePilot(this.id)
    .subscribe((data:PilotDto)=>{this.pilot=data;console.log(this.pilot)});
    this.creating = false;
  }
  
  pilotUpdate(id: number) {
    const pilot = new PilotDto(5, " test ", "test ", 10);
    this.service.updatePilot(id, pilot).subscribe();

  }
  ngOnInit() {
   
  }
}
