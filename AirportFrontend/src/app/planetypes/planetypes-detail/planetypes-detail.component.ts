import { Component, OnInit } from '@angular/core';
import { PlanetypesService } from '../planetypes.service';
import { ActivatedRoute } from '@angular/router';
import PlaneTypeDto from '../../shared/planetype.Dto';

@Component({
  selector: 'app-planetypes-detail',
  templateUrl: './planetypes-detail.component.html',
  styleUrls: ['./planetypes-detail.component.css'],
})
export class PlanetypesDetailComponent implements OnInit {

    planetype:PlaneTypeDto;
    id:number;
    allowchange: boolean;

  constructor(private service: PlanetypesService, private route: ActivatedRoute) {
    this.planetype=new PlaneTypeDto(undefined,undefined,undefined,undefined);
    this.route.params.subscribe(params=>this.id=params['id']);
    this.service.getOnePlanetype(this.id)
      .subscribe((data:PlaneTypeDto)=>
          {this.planetype=data;
            console.log(this.planetype)});
    this.allowchange=false;
    console.log(this.planetype);
     }

  onUpdateClick()
  {
    this.allowchange = true;
  }

  planetypeSaveUpdates(id: number, planetype) {
    this.service.updatePlanetype(id, planetype).subscribe(
      (res:Response)=>console.log(res)
    );
   }
  ngOnInit() {
 

  }
}
