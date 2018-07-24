import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RoutingModule} from './routing.module';
import { AppComponent } from './app.component';
import {PilotsModule} from './pilots/pilots.module';
import { PilotsListComponent } from './pilots/pilots-list/pilots-list.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PilotsModule,
    RoutingModule
  ],
  providers: [AppComponent, PilotsListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
