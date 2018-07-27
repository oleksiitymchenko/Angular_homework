import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CrewsDetailComponent} from './crews-detail/crews-detail.component';
import {CrewsListComponent} from './crews-list/crews-list.component';
import {CrewsService } from './crews.service';
import { FormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CrewsDetailComponent,
    CrewsListComponent],
  providers : [CrewsService]
})


export class CrewsModule { }
