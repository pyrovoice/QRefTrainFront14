import { GeneralBackendService } from './../../service/general-backend.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface PopupReportData {
  questionId;
  subject: string;
  details: string;
}

@Component({
  selector: 'app-popup-report-question',
  templateUrl: './popup-report-question.component.html'
})
export class PopupReportQuestionComponent {
  subjects = ["Missing text", "Answers are incorrect", "Video issue", "Other"]

  constructor(public dialogRef: MatDialogRef<PopupReportQuestionComponent>, @Inject(MAT_DIALOG_DATA) public data: PopupReportData, private generalBackendService: GeneralBackendService) { }

  onValidate(): void {
    this.generalBackendService.createQuestionErrorLog(this.data).subscribe(o => {
      next: () => this.dialogRef.close();
      error: () => console.log("Error when sending the log."); this.dialogRef.close();
      complete: () => this.dialogRef.close();
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
