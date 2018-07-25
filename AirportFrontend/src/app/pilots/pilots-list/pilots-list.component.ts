import { Component, OnInit } from '@angular/core';
import { PilotsService } from '../pilots.service';
import PilotDto from 'src/app/shared/pilotDto';

@Component({
  selector: 'app-pilots-list',
  templateUrl: './pilots-list.component.html',
  styleUrls: ['./pilots-list.component.css']
})
export class PilotsListComponent implements OnInit {

  pilots: Array<PilotDto>;
  constructor(private pilotServise: PilotsService) {
    this.getAllPilots();
  }

  pilotDelete(id: number) {
    const number = this.pilots.findIndex(item => (item['id'] == id));
    this.pilots.splice(number, 1);
    this.pilotServise.deletePilot(id).subscribe();
  }

  getAllPilots() {
    this.pilotServise.getPilots().subscribe((data: Array<PilotDto>) => {
      this.pilots = data;
    });
  }

  pilotUpdate(id: number) {
    const pilot = new PilotDto(5, " test ", "test ", 10);
    this.pilotServise.updatePilot(id, pilot).subscribe();
    const updating = this.pilots.find(item => item['id'] == id);
    updating['firstName'] = pilot['FirstName'];
    updating['lastName'] = pilot['LastName'];
    updating['experience'] = pilot['Experience'];
  }

  pilotCreate()
  {
    const pilot = new PilotDto(5, " test create 3", "test create 3", 10);
    this.pilotServise.createPilot(pilot).subscribe();
    this.getAllPilots();
  }

  ngOnInit() {

  }


}
