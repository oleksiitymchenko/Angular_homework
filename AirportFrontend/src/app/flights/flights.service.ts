import {AddressModule} from '../address.module';
import { Injectable, Inject } from '@angular/core';  
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { HttpModule, RequestOptions, RequestMethod } from '@angular/http';
import FlightDto from '../shared/flightDto';



@Injectable({
  providedIn: 'root'
})

export class FlightsService {

  private Url = AddressModule.defaultUrl+"Flights";
  constructor(private http: HttpClient ) {}

  public getFlights()
  {
    return this.http.get(this.Url);   
  }

  public getOneFlight(id:number)
  {
    return this.http.get(this.Url+"/"+id);
  }

  public deleteFlight(id: number) 
  {
    return this.http.delete(this.Url+"/"+id);
  }

  public updateFlight(id:number, flight:FlightDto)
  {
    return this.http.put(this.Url+"/"+id,flight);
  }

  public createFlight(flight:FlightDto)
  {
    return this.http.post(this.Url,flight);
  }
}
