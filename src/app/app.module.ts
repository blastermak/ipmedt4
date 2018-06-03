import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { MapsComponent } from './maps/maps.component';
import { HomeComponent } from './home/home.component';
import { DagboekComponent } from './dagboek/dagboek.component';
import {QuizComponent} from './quiz/quiz.component';
import { GraphComponent } from './graph/graph.component';

@NgModule({
  declarations: [
    AppComponent,
		MapsComponent,
		HomeComponent,
		DagboekComponent,
    QuizComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
		AppRoutingModule,
		LeafletModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
