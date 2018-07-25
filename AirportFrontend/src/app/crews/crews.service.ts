import {AddressModule} from '../address.module';
import { Injectable, Inject } from '@angular/core';  
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { HttpModule, RequestOptions, RequestMethod } from '@angular/http';
import CrewDto from '../shared/crewDto';



@Injectable({
  providedIn: 'root'
})

export class CrewsService {
v
  private Url = AddressModule.defaultUrl+"Crews";
  constructor(private http: HttpClient ) {}

  public getCrews()
  {
    return this.http.get(this.Url);   
  }

  public getOneCrew(id:number)
  {
    return this.http.get(this.Url+"/"+id);
  }

  public deleteCrew(id: number) 
  {
    return this.http.delete(this.Url+"/"+id);
  }

  public updateCrew(id:number, crew:CrewDto)
  {
    return this.http.put(this.Url+"/"+id,crew);
  }

  public createCrew(crew:CrewDto)
  {
    return this.http.post(this.Url,crew);
  }
}
