import {AddressModule} from 'src/app/address.module'
import PilotDto from 'src/app/shared/pilotDto';

import { Injectable, Inject } from '@angular/core';  
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Observable } from '../../../node_modules/rxjs';



@Injectable({
  providedIn: 'root'
})

export class PilotsService {

  private Url = AddressModule.defaultUrl+"Pilots";
  constructor(private http: HttpClient ) {}
  Pilots:Array<PilotDto>;

  public getPilots()
  {
    
    return this.http.get(this.Url);
    /*console.log("START");
    const response =   this.http.get(this.Url);
    console.log(response);

    await response.subscribe((data:Array<PilotDto>) =>
     { console.log(data);
     this.Pilots = data; 
     console.log(this.Pilots);  
    }); 

    console.log(this.Pilots);
      console.log("END")
      return this.Pilots;
*/
   
  }
}
