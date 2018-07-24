import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { PilotsListComponent } from './pilots/pilots-list/pilots-list.component';

const routes: Routes = [
  {
    path : '',
    pathMatch : 'full',
    redirectTo : 'menu'},{
    path : 'menu/pilots/',
    component : PilotsListComponent
    }

  ];


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class RoutingModule { }
