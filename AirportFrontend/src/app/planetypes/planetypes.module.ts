import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PlanetypesDetailComponent} from './planetypes-detail/planetypes-detail.component';
import {PlanetypesListComponent} from './planetypes-list/planetypes-list.component';
import {PlanetypesService } from './planetypes.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlanetypesDetailComponent,
    PlanetypesListComponent],
  providers : [PlanetypesService]
})


export class PlanetypesModule { }
