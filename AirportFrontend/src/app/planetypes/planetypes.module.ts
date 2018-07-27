import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PlanetypesDetailComponent} from './planetypes-detail/planetypes-detail.component';
import {PlanetypesListComponent} from './planetypes-list/planetypes-list.component';
import {PlanetypesService } from './planetypes.service';
import { FormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [PlanetypesDetailComponent,
    PlanetypesListComponent],
  providers : [PlanetypesService]
})


export class PlanetypesModule { }
