import { Component, OnInit } from '@angular/core';
import { PlanetypesService } from '../planetypes.service';
import { ActivatedRoute } from '@angular/router';
import PlaneTypeDto from '../../shared/planetype.Dto';

@Component({
  selector: 'app-planetypes-detail',
  templateUrl: './planetypes-detail.component.html',
  styleUrls: ['./planetypes-detail.component.css'],
  providers: [PlanetypesService]
})
export class PlanetypesDetailComponent implements OnInit {
  planetype:PlaneTypeDto;
    id:number;

  constructor(private service: PlanetypesService, private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.route.params.subscribe(params=>this.id=params['id'])
    this.service.getOnePlanetype(this.id)
    .subscribe((data:PlaneTypeDto)=>{this.planetype=data;console.log(this.planetype)});
  }
}
