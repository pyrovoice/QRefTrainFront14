import { QuestionListComponent } from './question-list/question-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionListingTableComponent } from './question-listing-table/question-listing-table.component';

const routes: Routes = [
  {

    path: 'homepage', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'quiz', loadChildren: () => import('./quiz/quiz.module').then(m => m.QuizModule)
  },
  {
    path: 'matchanalysis', loadChildren: () => import('./matchanalysis/matchanalysis.module').then(m => m.MatchanalysisModule)
  },
  { path: 'question-list', component: QuestionListingTableComponent },
  {
    path: '', redirectTo: 'homepage', pathMatch: 'full'
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "homepage"
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
