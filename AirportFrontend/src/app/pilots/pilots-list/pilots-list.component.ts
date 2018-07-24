import { Component, OnInit } from '@angular/core';
import { PilotsService } from '../pilots.service';
import PilotDto from 'src/app/shared/pilotDto';

@Component({
  selector: 'app-pilots-list',
  templateUrl: './pilots-list.component.html',
  styleUrls: ['./pilots-list.component.css']
})
export class PilotsListComponent implements OnInit {
  
  pilots:PilotDto[] = [];
  constructor(private pilotServise: PilotsService) { }

  ngOnInit() {
    this.pilots = this.pilotServise.getPilots();
  }

}
