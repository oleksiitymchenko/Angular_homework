import {AddressModule} from '../address.module';
import { Injectable, Inject } from '@angular/core';  
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { HttpModule, RequestOptions, RequestMethod } from '@angular/http';
import PlaneTypeDto from '../shared/planetype.Dto';



@Injectable({
  providedIn: 'root'
})

export class PlanetypesService {

  private Url = AddressModule.defaultUrl+"PlaneTypes";
  constructor(private http: HttpClient ) {}

  public getPlanetypes()
  {
    return this.http.get(this.Url);   
  }

  public getOnePlanetype(id:number)
  {
    return this.http.get(this.Url+"/"+id);
  }

  public deletePlanetype(id: number) 
  {
    return this.http.delete(this.Url+"/"+id);
  }

  public updatePlanetype(id:number, planetype:PlaneTypeDto)
  {
    return this.http.put(this.Url+"/"+id,planetype);
  }

  public createPlanetype(planetype:PlaneTypeDto)
  {
    return this.http.post(this.Url,planetype);
  }
}
