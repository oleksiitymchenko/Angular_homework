import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RoutingModule} from './routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {PilotsModule} from './pilots/pilots.module';
import {StewardessModule} from './stewardess/stewardess.module';
import {TicketsModule} from './tickets/tickets.module';
import { PlanetypesModule } from './planetypes/planetypes.module';
import { PlanesModule } from './planes/planes.module';
import { CrewsModule } from './crews/crews.module';
import { FlightsModule } from './flights/flights.module';
import { DeparturesModule } from './departures/departures.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PilotsModule,
    StewardessModule,
    TicketsModule,
    PlanetypesModule,
    PlanesModule,
    CrewsModule,
    FlightsModule,
    DeparturesModule,
    RoutingModule
  ],
  providers: [AppComponent, HttpClientModule, HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
