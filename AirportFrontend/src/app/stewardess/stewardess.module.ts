import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StewardessDetailComponent} from './stewardess-detail/stewardess-detail.component';
import {StewardessListComponent} from './stewardess-list/stewardess-list.component';
import {StewardessService } from './stewardess.service';
import { FormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [StewardessDetailComponent,
    StewardessListComponent],
  providers : [StewardessService]
})


export class StewardessModule { }
