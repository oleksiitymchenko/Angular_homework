import { Component, OnInit } from '@angular/core';
import { PlanesService } from '../planes.service';
import { ActivatedRoute } from '@angular/router';
import PlaneDto from '../../shared/planeDto';
import { PlanetypesService } from 'src/app/planetypes/planetypes.service';
import PlaneTypeDto from 'src/app/shared/planetype.Dto';

@Component({
  selector: 'app-planes-detail',
  templateUrl: './planes-detail.component.html',
  styleUrls: ['./planes-detail.component.css'],
  providers: [PlanesService, PlanetypesService]
})
export class PlanesDetailComponent implements OnInit {
    
    plane:PlaneDto;
    id:number;
    planetype:PlaneTypeDto;
    planetypes:Array<PlaneTypeDto>;
    allowchange:boolean;

  constructor(private service: PlanesService, 
    private route: ActivatedRoute,
  private ptserve: PlanetypesService) {  this.route.params.subscribe(params=>this.id=params['id'])
  this.service.getOnePlane(this.id)
    .subscribe((data:PlaneDto)=>{this.plane=data;
    console.log(this.plane);
    this.ptserve.getOnePlanetype(this.plane.typePlaneId)
    .subscribe((data:PlaneTypeDto)=>this.planetype=data);
     console.log(this.planetype);
    ;});
    console.log(this.planetype);
    this.ptserve.getPlanetypes().subscribe((data:Array<PlaneTypeDto>)=>this.planetypes=data);
    this.allowchange = false;
  }
  onUpdateClick()
  {
    this.allowchange = true;
  }

  planeSaveUpdates(id: number,plane) {
    this.service.updatePlane(id, plane).subscribe();

   }
  ngOnInit() {
   }
}
