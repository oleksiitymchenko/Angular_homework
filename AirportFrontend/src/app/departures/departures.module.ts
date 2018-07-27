import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DeparturesService } from './departures.service';
import { DeparturesDetailComponent } from './departures-detail/departures-detail.component';
import { DeparturesListComponent } from './departures-list/departures-list.component';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { CrewsService } from '../crews/crews.service';
import { PlanesService } from '../planes/planes.service';

@NgModule({
  imports: [
    CommonModule,
FormsModule  ],
  declarations: [DeparturesDetailComponent,
    DeparturesListComponent],
  providers : [DeparturesService,CrewsService,PlanesService]
})


export class DeparturesModule { }
