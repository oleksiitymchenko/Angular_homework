import { Component, OnInit } from '@angular/core';
import { PlanesService } from '../planes.service';
import PlaneDto from '../../shared/planeDto';

@Component({
  selector: 'app-planes-list',
  templateUrl: './planes-list.component.html',
  styleUrls: ['./planes-list.component.css']
})
export class PlanesListComponent implements OnInit {

  planes: Array<PlaneDto>;
  constructor(private planesServise: PlanesService) {
    this.getAllPlanes();
  }

  planeDelete(id: number) {
    const number = this.planes.findIndex(item => (item['id'] == id));
    this.planes.splice(number, 1);
    this.planesServise.deletePlane(id).subscribe();
  }

  getAllPlanes() {
    this.planesServise.getPlanes().subscribe((data: Array<PlaneDto>) => {
      this.planes = data;
      console.log(data);
      console.log(this.planes);
    });
   
  }

  planeUpdate(id: number) {
    const plane = new PlaneDto(1,"update test",10,"05/05/1998","20:59:59.9999999");
    this.planesServise.updatePlane(id, plane).subscribe();
    const updating = this.planes.find(item => item['id'] == id);
    updating['typePlaneId'] = plane['typePlaneId'];
    updating['created'] = plane['created'];
    updating['lifeTime'] = plane['lifeTime'];
   }

   planeCreate()
  {
    const timeSpan  = "12:00:00";
    const plane = new PlaneDto(0,"Mriya",0,"Tuesday, September 11, 2001",timeSpan);
    this.planesServise.createPlane(plane).subscribe(()=>{this.getAllPlanes(); console.log("ok");});
  }
  ngOnInit() {
  }


}
