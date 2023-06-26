import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GeneralBackendService } from '../../service/general-backend.service';
import { PopupReportQuestionComponent, PopupReportData } from '../popup-report-question/popup-report-question.component';

@Component({
  selector: 'app-popup-video-player',
  templateUrl: './popup-video-player.component.html',
  styleUrls: ['./popup-video-player.component.scss']
})
export class PopupVideoPlayerComponent implements AfterViewInit {
  @ViewChild('video') video!: ElementRef;
  constructor(public dialogRef: MatDialogRef<PopupReportQuestionComponent>, @Inject(MAT_DIALOG_DATA) public data) { }

  onNoClick(): void {
    this.video.nativeElement.pause();
    this.dialogRef.close();
  }
  ngAfterViewInit() {
    console.log(this.data.currentVideoURL)
    this.video.nativeElement.load();
  }
}
