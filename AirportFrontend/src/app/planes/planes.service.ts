import {AddressModule} from '../address.module';
import { Injectable, Inject } from '@angular/core';  
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { HttpModule, RequestOptions, RequestMethod } from '@angular/http';
import PlaneDto from '../shared/planeDto';



@Injectable({
  providedIn: 'root'
})

export class PlanesService {

  private Url = AddressModule.defaultUrl+"Planes";
  constructor(private http: HttpClient ) {}

  public getPlanes()
  {
    return this.http.get(this.Url);   
  }

  public getOnePlane(id:number)
  {
    return this.http.get(this.Url+"/"+id);
  }

  public deletePlane(id: number) 
  {
    return this.http.delete(this.Url+"/"+id);
  }

  public updatePlane(id:number, plane:PlaneDto)
  {
    return this.http.put(this.Url+"/"+id,plane);
  }

  public createPlane(plane:PlaneDto)
  {
    return this.http.post(this.Url,plane);
  }
}
