import { Answer } from './../../shared/model/answer.model';
import { LocalQuizService } from './../../shared/service/localquizz.service';
import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { QuizService } from 'src/app/shared/service/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionListDTO } from 'src/app/shared/api/dto/question-listDTO';
import { Question } from 'src/app/shared/model/question';
import { DomSanitizer } from '@angular/platform-browser';
import { AdminService } from 'src/app/shared/service/admin.service';
import { Quiz } from 'src/app/shared/model/quiz.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  //Necessary so the video is not loading everytime there's a change in the question model (so every time an answer is checked)
  currentVideoURL;
  questions: Question[] = [];
  currentQuestionNb = 0;
  quiz: Quiz;
  @ViewChild('video') video!: ElementRef;
  constructor(private quizService: QuizService, private localQuizService: LocalQuizService,
    private route: ActivatedRoute, private sanitizer: DomSanitizer, private api: AdminService, private router: Router) {

  }

  async ngOnInit(): Promise<void> {
    let selectedOptions;
    let withVideo;
    this.route.queryParamMap.subscribe(params => selectedOptions = params.getAll('topic'));
    this.quizService.getQuiz(10, selectedOptions).subscribe((quiz) => {
      this.quiz = quiz;
      quiz.Questions.forEach(q => {
        let question = new Question();
        question.id = q.Id;
        question.questionText = q.QuestionText
        question.answers = [];
        q.Answers.forEach(a => {
          let answer = new Answer;
          answer.id = a.Id
          answer.text = a.Answertext;
          question.answers.push(answer)
        });
        this.quizService.sortAnswer(question)

        question.URLVideo = q.GifName;
        this.questions.push(question);
      });
      this.setCurrentQuestion(0);
    })
  }

  getQuestionsFromDTO(questionDTOs: QuestionListDTO) {
    return null;
  }

  get currentQuestion(): Question {
    return this.questions[this.currentQuestionNb]
  }

  setCurrentQuestion(i) {
    this.currentQuestionNb = i;
    this.updateURL();
  }

  updateURL() {
    this.currentVideoURL = "assets/videos/" + this.currentQuestion.URLVideo + ".mp4"
    if (this.hasVideo() && this.video) {
      this.video.nativeElement.load();
    }
  }

  hasVideo() {
    return this.currentQuestion.URLVideo != null && this.currentQuestion.URLVideo != ""
  }

  moveCurrentQuestion(i) {
    if (this.currentQuestionNb + i >= 0 && this.currentQuestionNb + i < this.questions.length) {
      this.setCurrentQuestion(this.currentQuestionNb + i);
    }
  }

  isCurrentLastQuestion() {
    return this.currentQuestionNb < this.questions.length - 1
  }

  isQuestionCurrentlySelected(questionId) {
    return questionId == this.currentQuestionNb;
  }

  getSourceURL(url: String) {
    if (url == null || url == "") {
      return this.sanitizer.bypassSecurityTrustResourceUrl("");
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(url + "");
  }

  goToResult() {
    this.quizService.correctQuiz(this.questions, this.quiz.Id).subscribe(resultId => {
      this.router.navigate(["/quiz/resultPage"], { queryParams: { resultId: resultId } });
    })
  }
}
