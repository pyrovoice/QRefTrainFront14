import { QuestionResult } from './../shared/model/question-result';
import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/service/quiz.service';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  questions: QuestionResult[] = [];
  tagControl = new FormControl('');
  tagOptions: Set<string> = null;
  filteredOptions: Observable<string[]>;

  filterQuestionsList: QuestionResult[] = [];

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizService.getAllQuestions().subscribe(r => {
      this.questions = r;
      let a = [];
      this.questions.forEach(q => { q.Tags.forEach(t => { a.push(t.TagName) }) })
      this.tagOptions = new Set(a) // gives all unique tag values
      // this.filterQuestionsList = this.questions.filter(q => q.GifName).splice(0, 1);
       this.filterQuestionsList = this.questions;
    })

    this.filteredOptions = this.tagControl.valueChanges.pipe(
      startWith(''),
      map((value: any) => this._filter(value || '')),
    );

    this.tagControl.valueChanges.subscribe(v => {
      if (v && v.length > 0) {
        this.filterQuestionsList = [...this.questions].filter(q => q.Tags.findIndex(t => t.TagName.toLowerCase().includes(v.toLowerCase())) != -1)
      } else {
        this.filterQuestionsList = this.questions;
      }
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return [...this.tagOptions].filter(option => option.toLowerCase().includes(filterValue));
  }

}
