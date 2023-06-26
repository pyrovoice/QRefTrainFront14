import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-question-full',
  templateUrl: './popup-question-full.component.html',
  styleUrls: ['./popup-question-full.component.scss']
})
export class PopupQuestionFullComponent implements OnInit {


  ngOnInit(): void {
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data) { }

  moveVideo(intVal){
    let currentIndex = this.data.allQuestions.indexOf(this.data.q);
    currentIndex += intVal;
    if(currentIndex == -1){
      currentIndex = this.data.allQuestions.length-1
    }else if(currentIndex >= this.data.allQuestions.length){
      currentIndex = 0;
    }
    this.data.q = this.data.allQuestions[currentIndex];
  }
}
