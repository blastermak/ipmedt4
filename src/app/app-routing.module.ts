import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MapsComponent } from './maps/maps.component';
import { DagboekComponent } from './dagboek/dagboek.component';
import { QuizComponent } from './quiz/quiz.component';
//import { PageNotFoundComponent }    from './not-found.component';

const appRoutes: Routes = [{
  path: 'maps',
  component: MapsComponent
}, {
  path: 'home',
  component: HomeComponent
}, {
  path: 'dagboek',
  component: DagboekComponent
}, {
  path: 'quiz',
  component: QuizComponent
}, {
  path: '',   redirectTo: '/home', pathMatch: 'full'
}

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
