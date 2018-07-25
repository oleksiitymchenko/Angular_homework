import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PlanesDetailComponent} from './planes-detail/planes-detail.component';
import {PlanesListComponent} from './planes-list/planes-list.component';
import {PlanesService } from './planes.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlanesDetailComponent,
    PlanesListComponent],
  providers : [PlanesService]
})


export class PlanesModule { }
