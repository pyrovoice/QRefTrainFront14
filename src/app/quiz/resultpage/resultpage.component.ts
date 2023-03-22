import { AnswerResult } from './../../shared/model/answer-result.model';
import { QuestionResult } from './../../shared/model/question-result';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/shared/model/question';
import { QuizResult } from 'src/app/shared/model/quiz-result.model';
import { QuizService } from 'src/app/shared/service/quiz.service';

@Component({
  selector: 'app-resultpage',
  templateUrl: './resultpage.component.html',
  styleUrls: ['./resultpage.component.scss']
})
export class ResultpageComponent implements OnInit {
  quizResult: QuizResult;
  currentQuestionNb = null;
  currentVideoURL;
  @ViewChild('video') video!: ElementRef;

  constructor(private route: ActivatedRoute, private quizService: QuizService, private router: Router) {

  }

  ngOnInit(): void {
    let resultId;
    this.route.queryParamMap.subscribe(params => resultId = JSON.parse(params.get('resultId')));
    this.quizService.getQuizResult(resultId).subscribe(result => {
      this.quizResult = result;
      this.quizResult.QuestionsAsked.forEach(q => {
        q.Answers.forEach(a => {
          if (this.quizResult.SelectedAnswers.find(selectedA => selectedA.Id == a.Id)) {
            a.isSelected = true;
          }
        })
      })
    })
  }

  copyResultToClipboard() {
    navigator.clipboard.writeText(window.location.href);
  }

  getNumberCorrectAnswer() {
    return this.quizResult.QuestionsAsked.filter(q => this.isGoodAnswer(q)).length;
  }

  isGoodAnswer(question: QuestionResult) {
    return question.Answers && question.Answers.find(a => (a.IsGoodAnswer && !a.isSelected) || (!a.IsGoodAnswer && a.isSelected)) == undefined;
  }

  get currentQuestion(): QuestionResult {
    return this.quizResult.QuestionsAsked[this.currentQuestionNb]
  }

  moveCurrentQuestion(i) {
    if (this.currentQuestionNb == null) {
      i > 0 ? this.setCurrentQuestion(0) : this.setCurrentQuestion(this.quizResult.QuestionsAsked.length - 1)
    }
    else if (this.currentQuestionNb + i >= 0 && this.currentQuestionNb + i < this.quizResult.QuestionsAsked.length) {
      this.setCurrentQuestion(this.currentQuestionNb + i);
    } else {
      this.currentQuestionNb = null;
    }
  }
  setCurrentQuestion(i) {
    this.currentQuestionNb = i;
    this.updateURL();
  }

  updateURL() {
    this.currentVideoURL = "assets/videos/" + this.currentQuestion.GifName + ".mp4"
    if (this.hasVideo() && this.video) {
      this.video.nativeElement.load();
    }
  }
  hasVideo() {
    return this.currentQuestion.GifName != null && this.currentQuestion.GifName != ""
  }

  navigate(page) {
    this.router.navigate(['/' + page]);
  }

}
