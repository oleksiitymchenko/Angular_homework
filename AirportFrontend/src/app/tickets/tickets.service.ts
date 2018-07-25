import {AddressModule} from '../address.module';
import TicketDto from '../shared/ticketDto';
import { Injectable, Inject } from '@angular/core';  
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { HttpModule, RequestOptions, RequestMethod } from '@angular/http';



@Injectable({
  providedIn: 'root'
})

export class TicketsService {

  private Url = AddressModule.defaultUrl+"Tickets";
  constructor(private http: HttpClient ) {}

  public getTickets()
  {
    return this.http.get(this.Url);   
  }

  public getOneTicket(id:number)
  {
    return this.http.get(this.Url+"/"+id);
  }

  public deleteTicket(id: number) 
  {
    return this.http.delete(this.Url+"/"+id);
  }

  public updateTicket(id:number, ticket:TicketDto)
  {
    return this.http.put(this.Url+"/"+id,ticket);
  }

  public createTicket(ticket:TicketDto)
  {
    return this.http.post(this.Url,ticket);
  }
}
