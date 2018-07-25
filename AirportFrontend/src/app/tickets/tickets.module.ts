import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TicketsDetailComponent} from './tickets-detail/tickets-detail.component';
import {TicketsListComponent} from './tickets-list/tickets-list.component';
import {TicketsService } from './tickets.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TicketsDetailComponent,
    TicketsListComponent],
  providers : [TicketsService]
})


export class TicketsModule { }
