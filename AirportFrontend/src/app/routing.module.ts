import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PilotsListComponent } from './pilots/pilots-list/pilots-list.component';
import { PilotsDetailComponent } from './pilots/pilots-detail/pilots-detail.component';
import { StewardessListComponent } from './stewardess/stewardess-list/stewardess-list.component';
import { StewardessDetailComponent } from './stewardess/stewardess-detail/stewardess-detail.component';
import {TicketsListComponent} from './tickets/tickets-list/tickets-list.component';
import {TicketsDetailComponent} from './tickets/tickets-detail/tickets-detail.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'menu'
  },
  {
    path: 'menu/pilots',
    component: PilotsListComponent
  },
  {
    path: 'menu/pilots/:id',
    component: PilotsDetailComponent
  },
  {
    path: 'menu/stewardesses',
    component: StewardessListComponent
  },
  {
    path: 'menu/stewardesses/:id',
    component: StewardessDetailComponent
  },
  {
    path: 'menu/tickets',
    component: TicketsListComponent
  },
  {
    path: 'menu/tickets/:id',
    component: TicketsDetailComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
