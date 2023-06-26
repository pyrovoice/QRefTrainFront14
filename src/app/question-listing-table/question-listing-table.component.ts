import { QuestionResult } from './../shared/model/question-result';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { QuizService } from '../shared/service/quiz.service';
import { map, Observable, startWith } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PopupVideoPlayerComponent } from '../shared/component/popup-video-player/popup-video-player.component';
import { PopupQuestionFullComponent } from '../shared/component/popup-question-full/popup-question-full.component';

@Component({
  selector: 'app-question-listing-table',
  templateUrl: './question-listing-table.component.html',
  styleUrls: ['./question-listing-table.component.scss']
})
export class QuestionListingTableComponent implements OnInit {
  displayedColumns = ['Id', 'QuestionText', 'AnswerExplanation', 'Answers', 'Video', 'actions'];
  dataSource: MatTableDataSource<QuestionResult>;
  questions: QuestionResult[] = [];
  tagControl = new FormControl('');
  tagOptions: Set<string> = null;
  filteredOptions: Observable<string[]>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private quizService: QuizService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.quizService.getAllQuestions().subscribe(r => {
      this.questions = r;
      let a = [];
      this.questions.forEach(q => { q.Tags.forEach(t => { a.push(t.TagName) }) })
      this.tagOptions = new Set(a) // gives all unique tag values
      // this.filterQuestionsList = this.questions.filter(q => q.GifName).splice(0, 1);
      this.dataSource = new MatTableDataSource(this.questions);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.filterPredicate = (q: QuestionResult, v: string) => !v || q.Tags.findIndex(t => t.TagName.toLowerCase().includes(v.toLowerCase())) != -1
    })


    this.filteredOptions = this.tagControl.valueChanges.pipe(
      startWith(''),
      map((value: any) => this._filter(value || '')),
    );

    this.tagControl.valueChanges.subscribe(v => {
      v = v.trim(); // Remove whitespace
      v = v.toLowerCase(); // Datasource defaults to lowercase matches
      this.dataSource.filter = v;
    })
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return [...this.tagOptions].filter(option => option.toLowerCase().includes(filterValue));
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  getGoodAnswers(row: QuestionResult) {
    return row.Answers.filter(a => a.IsGoodAnswer).map(a => a.Answertext).join("; ")
  }

  navigate(page) {
    this.router.navigate(['/' + page]);
  }

  openVideo(row) {
    this.dialog.open(PopupQuestionFullComponent, {
      height: (window.innerHeight * 0.9) + 'px',
      width: (window.innerWidth * 0.9) + 'px',
      data: { q: row, allQuestions: this.dataSource.data }
    });
  }


}
