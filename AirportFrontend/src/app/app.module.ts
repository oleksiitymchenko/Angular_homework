import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {PilotsModule} from './pilots/pilots.module';
import {RoutingModule} from './routing.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PilotsListComponent } from './pilots/pilots-list/pilots-list.component';
import { PilotsDetailComponent } from './pilots/pilots-detail/pilots-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PilotsListComponent,
    PilotsDetailComponent
  ],
  imports: [
    BrowserModule,MatButtonModule,MatCardModule,PilotsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
