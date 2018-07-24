import {AddressModule} from 'src/app/address.module'
import PilotDto from 'src/app/shared/pilotDto';

import { Injectable, Inject } from '@angular/core';  
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class PilotsService {

  
  constructor(private http: HttpClient , private Url = AddressModule.defaultUrl+"Pilots") {}

  public getPilots()
  {
    let Pilots:[PilotDto];
    this.http.get(this.Url).subscribe((data:[PilotDto]) => Pilots = data);
    return Pilots;
  }
}
