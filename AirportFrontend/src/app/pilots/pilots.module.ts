import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PilotsDetailComponent} from '../pilots/pilots-detail/pilots-detail.component';
import {PilotsListComponent} from '../pilots/pilots-list/pilots-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PilotsDetailComponent,PilotsListComponent]
})
export class PilotsModule { }
