import { Component, OnInit } from '@angular/core';
import { DeparturesService } from '../departures.service';
import { ActivatedRoute } from '@angular/router';
import DepartureDto from '../../shared/departureDto';

@Component({
  selector: 'app-departures-detail',
  templateUrl: './departures-detail.component.html',
  styleUrls: ['./departures-detail.component.css'],
  providers: [DeparturesService]
})
export class DeparturesDetailComponent implements OnInit {
  departure:DepartureDto;
    id:number;

  constructor(private service: DeparturesService, private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.route.params.subscribe(params=>this.id=params['id'])
    this.service.getOneDeparture(this.id)
    .subscribe((data:DepartureDto)=>{this.departure=data;console.log(this.departure)});
  }
}
