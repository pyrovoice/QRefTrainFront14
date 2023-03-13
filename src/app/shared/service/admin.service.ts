import { AnswerResult } from '../model/answer-result.model';
import { NationalGoverningBody } from './../model/national-governing-body.model';
import { Question } from './../model/question';
import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';
import { ImportResult } from '../model/import-result';
import { QuestionSubject } from '../enum/question-topic.enum';
import { HttpClient } from '@angular/common/http';
import { QuestionDTO } from '../api/dto/questionDTO';
import { Answer } from '../model/answer.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private apiService: ApiService, private http: HttpClient) { }

  loadQuestionsFromGoogleDrive(): Observable<ImportResult> {
    return this.apiService.get<ImportResult>("admin/loadfromdrive", null);
  }

  loadAllQuestions() {
    return this.apiService.get<Question[]>("question/getAllQuestions", null);
  }

  async loadNonDepreciatedQuestions(questionSubjects?: QuestionSubject): Promise<Question[]> {
    //return this.apiService.get<Question[]>("question/getquestionsbysubjects", questionSubjects);
    let questions: Question[] = [];
    let a = await this.http.get("./assets/questions.json").toPromise();
    questions = this.getQuestionsFromJson(a);
    return questions;
  }

  private getQuestionsFromJson(data) {
    let allQuestions: Question[] = [];
    let qDTOs: QuestionDTO[];
    qDTOs = data;
    qDTOs.forEach(qDTO => allQuestions.push(this.getQuestionFromDTO(qDTO)))
    return allQuestions;
  }

  private getQuestionFromDTO(q: QuestionDTO): Question {
    let question = new Question();
    question.id = q.Id;
    question.questionText = q.QuestionText
    q.Answers.forEach(a => {
      let answer = new Answer;
      answer.id = a.Id
      answer.text = a.Answertext;
      question.answers.push(answer)
    });
    question.URLVideo = question.URLVideo;
    return question;
  }

  private getNGB(ngb: any) {
    let NGB: NationalGoverningBody = { name: "any", abreviation: "any", location: "any" };
    return NGB;
  }
}



