import { QuestionResult } from './../../model/question-result';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-full-info',
  templateUrl: './question-full-info.component.html',
  styleUrls: ['./question-full-info.component.scss']
})
export class QuestionFullInfoComponent implements OnInit {
  @Input() question: QuestionResult;
  constructor() { }

  ngOnInit(): void {
    
  }

}

