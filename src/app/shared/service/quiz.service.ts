import { QuestionResult } from './../model/question-result';

import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';
import { QuestionSubject } from '../enum/question-topic.enum';
import { Question } from '../model/question';
import { QuestionDTO } from '../api/dto/questionDTO';
import { QuizResult } from '../model/quiz-result.model';
import { Quiz } from '../model/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private static readonly commonAnswers = ["no penalty", "back to hoops", "turnover", "blue card", "yellow card", "red card"];

  constructor(private apiService: ApiService) { }

  getQuiz(nbr: number, topics: QuestionSubject[]): Observable<Quiz> {
    return this.apiService.post<Quiz, QuestionSubject[]>('Quiz/StartTestQuiz', topics);
  }

  correctQuiz(questions: Question[], quizId: number): Observable<number>{
    return this.apiService.post<number, any>('Quiz/ResolveQuiz', {questions, quizId});
  }

  getQuizResult(resultId: number): Observable<QuizResult>{
    return this.apiService.get<QuizResult>('Quiz/GetResult', {resultId: resultId});
  }

  sortAnswer(questionToSort: Question) {
    questionToSort.answers.sort((a, b) => {
      let aText = a.text.toLowerCase();
      let bText = b.text.toLowerCase();
      if (QuizService.commonAnswers.includes(aText)) {
        if (QuizService.commonAnswers.includes(bText)) {
          return QuizService.commonAnswers.indexOf(aText) -QuizService.commonAnswers.indexOf(bText)
        } else {
          return -1;
        }
      } else if (QuizService.commonAnswers.includes(bText)) {
        return 1
      }
      return aText.localeCompare(bText);
    })
  }
}
