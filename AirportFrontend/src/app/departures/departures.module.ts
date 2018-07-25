import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DeparturesService } from './departures.service';
import { DeparturesDetailComponent } from './departures-detail/departures-detail.component';
import { DeparturesListComponent } from './departures-list/departures-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DeparturesDetailComponent,
    DeparturesListComponent],
  providers : [DeparturesService]
})


export class DeparturesModule { }
