import {AddressModule} from 'src/app/address.module'
import PilotDto from 'src/app/shared/pilotDto';

import { Injectable, Inject } from '@angular/core';  
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { HttpModule, RequestOptions, RequestMethod } from '@angular/http';



@Injectable({
  providedIn: 'root'
})

export class PilotsService {

  private Url = AddressModule.defaultUrl+"Pilots";
  constructor(private http: HttpClient ) {}

  public getPilots()
  {
    return this.http.get(this.Url);   
  }

  public getOnePilot(id:number)
  {
    return this.http.get(this.Url+"/"+id);
  }

  public deletePilot(id: number) 
  {
    return this.http.delete(this.Url+"/"+id);
  }

  public updatePilot(id:number, pilot:PilotDto)
  {
    return this.http.put(this.Url+"/"+id,pilot);
  }

  public createPilot(pilot:PilotDto)
  {
    return this.http.post(this.Url,pilot);
  }
}
