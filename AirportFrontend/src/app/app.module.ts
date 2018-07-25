import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RoutingModule} from './routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {PilotsModule} from './pilots/pilots.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PilotsModule,
    RoutingModule
  ],
  providers: [AppComponent, HttpClientModule, HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
