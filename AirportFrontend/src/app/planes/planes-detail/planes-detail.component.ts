import { Component, OnInit } from '@angular/core';
import { PlanesService } from '../planes.service';
import { ActivatedRoute } from '@angular/router';
import PlaneDto from '../../shared/planeDto';

@Component({
  selector: 'app-planes-detail',
  templateUrl: './planes-detail.component.html',
  styleUrls: ['./planes-detail.component.css'],
  providers: [PlanesService]
})
export class PlanesDetailComponent implements OnInit {
  plane:PlaneDto;
    id:number;

  constructor(private service: PlanesService, private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.route.params.subscribe(params=>this.id=params['id'])
    this.service.getOnePlane(this.id)
    .subscribe((data:PlaneDto)=>{this.plane=data;console.log(this.plane)});
  }
}
