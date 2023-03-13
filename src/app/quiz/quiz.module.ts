import { ResultpageComponent } from './resultpage/resultpage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz/quiz.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [QuizComponent, ResultpageComponent],
  imports: [
    CommonModule,
    QuizRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class QuizModule { }
