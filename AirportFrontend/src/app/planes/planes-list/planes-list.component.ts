import { Component, OnInit } from '@angular/core';
import { PlanesService } from '../planes.service';
import PlaneDto from '../../shared/planeDto';
import PlaneTypeDto from '../../shared/planetype.Dto';
import { PlanetypesService } from '../../planetypes/planetypes.service';

@Component({
  selector: 'app-planes-list',
  templateUrl: './planes-list.component.html',
  styleUrls: ['./planes-list.component.css']
})
export class PlanesListComponent implements OnInit {

  planes: Array<PlaneDto>;
  planeCreating:PlaneDto;
  planetypes:Array<PlaneTypeDto>;
  creating:boolean;

  constructor(private planesServise: PlanesService, private ptserv: PlanetypesService) {
    this.getAllPlanes();
    this.creating=false;
    this.planeCreating=new PlaneDto(undefined,undefined,undefined,undefined,undefined);
    ptserv.getPlanetypes().subscribe((data:Array<PlaneTypeDto>)=>this.planetypes=data);
  }
  creatingProcess()
  {
    const x = !this.creating;
    this.creating=x;
  }

  planeDelete(id: number) {
    const number = this.planes.findIndex(item => (item['id'] == id));
    this.planes.splice(number, 1);
    this.planesServise.deletePlane(id).subscribe();
  }

  getAllPlanes() {
    this.planesServise.getPlanes().subscribe((data: Array<PlaneDto>) => {
      this.planes = data;
      console.log(this.planes)
    });
    console.log(this.planes);   
  }

   planeCreate(plane:PlaneDto)
  {
    this.planesServise.createPlane(plane).subscribe((res:Response)=>{this.getAllPlanes(); console.log("ok");});
  }
  ngOnInit() {    this.getAllPlanes();

  }


}
