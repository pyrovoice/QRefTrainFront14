import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchAnalysisComponent } from './match-analysis/match-analysis.component';
import { NewMatchComponent } from './new-match/new-match.component';

const routes: Routes = [
  { path: 'match', component: MatchAnalysisComponent},
  { path: 'newmatch', component: NewMatchComponent},
  { path: '', component: NewMatchComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchanalysisRoutingModule { }
