import {AddressModule} from '../address.module';
import { Injectable, Inject } from '@angular/core';  
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { HttpModule, RequestOptions, RequestMethod } from '@angular/http';
import  DepartureDto from '../shared/departureDto';



@Injectable({
  providedIn: 'root'
})

export class DeparturesService {

  private Url = AddressModule.defaultUrl+"Departures";
  constructor(private http: HttpClient ) {}

  public getDepartures()
  {
    return this.http.get(this.Url);   
  }

  public getOneDeparture(id:number)
  {
    return this.http.get(this.Url+"/"+id);
  }

  public deleteDeparture(id: number) 
  {
    return this.http.delete(this.Url+"/"+id);
  }

  public updateDeparture(id:number, departure:DepartureDto)
  {
    return this.http.put(this.Url+"/"+id,departure);
  }

  public createDeparture(departure:DepartureDto)
  {
    return this.http.post(this.Url,departure);
  }
}
