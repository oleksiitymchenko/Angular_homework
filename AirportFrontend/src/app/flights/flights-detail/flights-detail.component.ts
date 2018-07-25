import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../flights.service';
import { ActivatedRoute } from '@angular/router';
import FlightDTO from '../../shared/flightDto';

@Component({
  selector: 'app-flights-detail',
  templateUrl: './flights-detail.component.html',
  styleUrls: ['./flights-detail.component.css'],
  providers: [FlightsService]
})
export class FlightsDetailComponent implements OnInit {
  flight:FlightDTO;
    id:number;

  constructor(private service: FlightsService, private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.route.params.subscribe(params=>this.id=params['id'])
    this.service.getOneFlight(this.id)
    .subscribe((data:FlightDTO)=>{this.flight=data;console.log(this.flight)});
  }
}
