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
    allowchange:boolean;

  constructor(private service: PilotsService, private route: ActivatedRoute) {
    this.pilot=new PilotDto(undefined,undefined, undefined,undefined);
    console.log(this.pilot);
    this.route.params.subscribe(params=>this.id=params['id'])
    this.service.getOnePilot(this.id)
      .subscribe((data:PilotDto)=>
      {this.pilot=data; 
      (res:Response)=>console.log(res)});
    this.allowchange = false;
  }

  onUpdateClick()
  {
    this.allowchange = true;
  }


  pilotSaveUpdates(id: number,pilot) {
    console.log(pilot);
    this.service.updatePilot(id, pilot).subscribe((res:Response)=>console.log(res));
  }
  ngOnInit() {
   
  }
}
