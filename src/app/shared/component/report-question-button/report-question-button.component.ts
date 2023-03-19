import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PopupReportQuestionComponent } from '../popup-report-question/popup-report-question.component';

@Component({
  selector: 'app-report-question-button',
  templateUrl: './report-question-button.component.html'
})
export class ReportQuestionComponent {

  @Input() questionId;
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(PopupReportQuestionComponent, {
      width: '350px',
      data: { questionId: this.questionId }
    });
  }
}
