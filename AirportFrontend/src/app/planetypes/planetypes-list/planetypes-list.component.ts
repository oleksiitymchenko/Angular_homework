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
  constructor(private planetypesServise: PlanetypesService) {
    this.getAllPlanetypes();
  }

  planetypeDelete(id: number) {
    const number = this.planetypes.findIndex(item => (item['id'] == id));
    this.planetypes.splice(number, 1);
    this.planetypesServise.deletePlanetype(id).subscribe();
  }

  getAllPlanetypes() {
    this.planetypesServise.getPlanetypes().subscribe((data: Array<PlaneTypeDto>) => {
      this.planetypes = data;
      console.log(this.planetypes);
    });
   
  }

  planetypeUpdate(id: number) {
    const planetype = new PlaneTypeDto(5, "model update",200,2000);
    this.planetypesServise.updatePlanetype(id, planetype).subscribe();
    const updating = this.planetypes.find(item => item['id'] == id);
    updating['model'] = planetype['model'];
    updating['places'] = planetype['places'];
    updating['carrying'] = planetype['carrying'];
   }

   planetypeCreate()
  {
    const planetype = new PlaneTypeDto(5, "model create",100,1000);
    this.planetypesServise.createPlanetype(planetype).subscribe(()=>this.getAllPlanetypes());
  }
  ngOnInit() {
  }


}
