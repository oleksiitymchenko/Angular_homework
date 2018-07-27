import { Component, OnInit } from '@angular/core';
import { PilotsService } from '../pilots.service';
import PilotDto from '../../shared/pilotDto';

@Component({
  selector: 'app-pilots-list',
  templateUrl: './pilots-list.component.html',
  styleUrls: ['./pilots-list.component.css']
})
export class PilotsListComponent implements OnInit {

  pilots: Array<PilotDto>;
  pilotCreating:PilotDto;
  creating:boolean;

  constructor(private pilotServise: PilotsService) {
    this.getAllPilots();
    this.pilotCreating= new PilotDto(undefined,undefined,undefined,undefined);
    this.creating=false;
  }

  creatingProcess()
  {
    const x = !this.creating;
    this.creating=x;
  }

  pilotDelete(id: number) {
    const number = this.pilots.findIndex(item => (item['id'] == id));
    this.pilots.splice(number, 1);
    this.pilotServise.deletePilot(id).subscribe((res:Response)=>console.log(res));
  }

  getAllPilots() {
    this.pilotServise.getPilots().subscribe((data: Array<PilotDto>) => {
      this.pilots = data;
      console.log(this.pilots);
      (res:Response)=>console.log(res);
    });
  }

  

  pilotCreate(pilot)
  {
    this.pilotServise.createPilot(pilot)
      .subscribe((res:Response)=>{console.log(res);  this.getAllPilots();});
  
  }

  ngOnInit() {

  }


}
