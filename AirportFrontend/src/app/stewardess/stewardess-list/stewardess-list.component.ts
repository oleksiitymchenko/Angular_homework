import { Component, OnInit } from '@angular/core';
import { StewardessService } from '../stewardess.service';
import StewardessDto from '../../shared/stewardessDto';

@Component({
  selector: 'app-stewardess-list',
  templateUrl: './stewardess-list.component.html',
  styleUrls: ['./stewardess-list.component.css']
})
export class StewardessListComponent implements OnInit {

  stewardesses: Array<StewardessDto>;
  constructor(private stewardessServise: StewardessService) {
    this.getAllStewardesses();
  }

  stewardessDelete(id: number) {
    const number = this.stewardesses.findIndex(item => (item['id'] == id));
    this.stewardesses.splice(number, 1);
    this.stewardessServise.deleteStewardess(id).subscribe();
  }

  getAllStewardesses() {
    this.stewardessServise.getStewardesses().subscribe((data: Array<StewardessDto>) => {
      this.stewardesses = data;
    });
  }

  stewardessUpdate(id: number) {
    const stewardess = new StewardessDto(5, " test name", "test lastname", "06/05/1972");
    this.stewardessServise.updateStewardess(id, stewardess).subscribe();
    const updating = this.stewardesses.find(item => item['id'] == id);
    updating['firstName'] = stewardess['FirstName'];
    updating['lastName'] = stewardess['LastName'];
    updating['dateOfBirth'] = stewardess['DateOfBirth'];
  }

  stewardessCreate()
  {
    const pilot = new StewardessDto(5, " test create 3", "test create 3", 10);
    this.stewardessServise.createStewardess(pilot).subscribe();
    this.getAllStewardesses();
  }

  ngOnInit() {

  }


}
