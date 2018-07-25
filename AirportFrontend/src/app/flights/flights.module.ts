import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlightsService } from './flights.service';
import { FlightsDetailComponent } from './flights-detail/flights-detail.component';
import { FlightsListComponent } from './flights-list/flights-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FlightsDetailComponent,
    FlightsListComponent],
  providers : [FlightsService]
})


export class FlightsModule { }
