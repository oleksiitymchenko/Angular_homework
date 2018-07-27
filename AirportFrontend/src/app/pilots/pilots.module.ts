import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PilotsDetailComponent} from './pilots-detail/pilots-detail.component';
import {PilotsListComponent} from './pilots-list/pilots-list.component';
import { PilotsService } from './pilots.service';
import { FormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [PilotsDetailComponent,
    PilotsListComponent],
  providers : [PilotsService]
})


export class PilotsModule { }
