import { Component, OnInit } from '@angular/core';
import { PlanetypesService } from '../planetypes.service';
import PlaneTypeDto from '../../shared/planetype.Dto';

@Component({
  selector: 'app-planetypes-list',
  templateUrl: './planetypes-list.component.html',
  styleUrls: ['./planetypes-list.component.css']
})
export class PlanetypesListComponent implements OnInit {

  planetypes: Array<PlaneTypeDto>;
  planetypeCreating:PlaneTypeDto;
  creating:boolean;

  constructor(private planetypesServise: PlanetypesService) {
    this.getAllPlanetypes();
    this.planetypeCreating=new PlaneTypeDto(undefined,undefined,undefined,undefined);
    this.creating=false;
  }

  getAllPlanetypes() {
    this.planetypesServise.getPlanetypes()
      .subscribe((data: Array<PlaneTypeDto>) => {
        this.planetypes = data;
        (res:Response)=>console.log(res);
      });
  }

  planetypeDelete(id: number) {
    const number = this.planetypes.findIndex(item => (item['id'] == id));
    this.planetypes.splice(number, 1);
    this.planetypesServise.deletePlanetype(id).subscribe();
  }

  planetypeUpdate(id: number) {
    const planetype = new PlaneTypeDto(5, "model update",200,2000);
    this.planetypesServise.updatePlanetype(id, planetype).subscribe();
    const updating = this.planetypes.find(item => item['id'] == id);
    updating['model'] = planetype['model'];
    updating['places'] = planetype['places'];
    updating['carrying'] = planetype['carrying'];
   }

   planetypeCreate(planetype:PlaneTypeDto)
  {
    this.planetypesServise.createPlanetype(planetype)
      .subscribe(()=>
      {this.getAllPlanetypes(); 
        (res:Response)=>console.log(res);});
  }

  creatingProcess()
  {
    const x = !this.creating;
    this.creating=x;
  }

  ngOnInit() {
  }
}
