import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { QuestionSubject } from 'src/app/shared/enum/question-topic.enum';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api/api.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  sidebarOpen = true;
  questionSubject = QuestionSubject;
  topics: Array<QuestionSubject> = [QuestionSubject.Assistref, QuestionSubject.Headref];

  constructor(private router: Router) {
  }

  loadPage(selectedOption) {
    this.router.navigate(['/' + selectedOption]);
  }
  startQuiz(selectedOption) {
    this.router.navigate(['/quiz'], { queryParams: { topic: selectedOption } });
  }

  startStrategy() {
    this.router.navigate(['/strategy']);
  }

  startQuestionList() {
    this.router.navigate(['/questionlist']);
  }

  startMatchAnalysis() {
    this.router.navigate(['/matchevent']);
  }
}
