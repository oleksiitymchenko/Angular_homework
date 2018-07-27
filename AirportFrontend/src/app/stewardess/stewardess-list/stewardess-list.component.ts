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
  stewardessCreating:StewardessDto;
  creating:boolean;
  constructor(private stewardessServise: StewardessService) {
    this.stewardessCreating = new StewardessDto(undefined,undefined,undefined,undefined );
    this.creating = false;
    this.getAllStewardesses();
  }

  creatingProcess()
  {
    const x = !this.creating;
    this.creating=x;
  }

  stewardessDelete(id: number) {
    const number = this.stewardesses.findIndex(item => (item['id'] == id));
    this.stewardesses.splice(number, 1);
    this.stewardessServise.deleteStewardess(id)
      .subscribe((res:Response)=>console.log(res));
  }

  getAllStewardesses() {
    this.stewardessServise.getStewardesses().subscribe((data: Array<StewardessDto>) => {
      this.stewardesses = data; (res:Response)=>console.log(res); console.log(this.stewardesses);
    });
    console.log(this.stewardesses);
  }

  stewardessUpdate(id: number, stewardess) {
    this.stewardessServise.updateStewardess(id, stewardess)
      .subscribe((res:Response)=>{console.log(res);});
  }

  stewardessCreate(stewardess)
  {
    this.stewardessServise.createStewardess(stewardess)
      .subscribe((res:Response)=>
      {console.log(res); 
        this.getAllStewardesses();});
  }

  ngOnInit() {

  }
}
