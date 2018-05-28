import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MapsComponent } from './maps/maps.component';
import { HomeComponent } from './home/home.component';
import { DagboekComponent } from './dagboek/dagboek.component';

@NgModule({
  declarations: [
    AppComponent,
		MapsComponent,
		HomeComponent,
		DagboekComponent
  ],
  imports: [
    BrowserModule,
		AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
