import {AddressModule} from '../address.module';
import StewardessDto from '../shared/stewardessDto';
import { Injectable, Inject } from '@angular/core';  
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { HttpModule, RequestOptions, RequestMethod } from '@angular/http';



@Injectable({
  providedIn: 'root'
})

export class StewardessService {

  private Url = AddressModule.defaultUrl+"Stewardesses";
  constructor(private http: HttpClient ) {}

  public getStewardesses()
  {
    return this.http.get(this.Url);   
  }

  public getOneStewardess(id:number)
  {
    return this.http.get(this.Url+"/"+id);
  }

  public deleteStewardess(id: number) 
  {
    return this.http.delete(this.Url+"/"+id);
  }

  public updateStewardess(id:number, stewardess:StewardessDto)
  {
    return this.http.put(this.Url+"/"+id,stewardess);
  }

  public createStewardess(stewardess:StewardessDto)
  {
    return this.http.post(this.Url,stewardess);
  }
}
