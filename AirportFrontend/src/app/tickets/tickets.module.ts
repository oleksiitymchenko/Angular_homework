import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TicketsDetailComponent} from './tickets-detail/tickets-detail.component';
import {TicketsListComponent} from './tickets-list/tickets-list.component';
import {TicketsService } from './tickets.service';
import { FormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
    ],
  declarations: [TicketsDetailComponent,
    TicketsListComponent],
  providers : [TicketsService]
})


export class TicketsModule { }
