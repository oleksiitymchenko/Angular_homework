import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { PilotsListComponent } from './pilots/pilots-list/pilots-list.component';
import { PilotsDetailComponent } from './pilots/pilots-detail/pilots-detail.component';

const routes: Routes = [
  {
    path : '',
    pathMatch : 'full',
    redirectTo : 'menu'},{
    path : 'menu/pilots',
    component : PilotsListComponent
    },
    {
       path : 'menu/pilots/:id',
      component : PilotsDetailComponent
      }
  ];


@NgModule({
   imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
