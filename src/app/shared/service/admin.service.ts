import { Answer } from './../model/answer.model';
import { NationalGoverningBody } from './../model/national-governing-body.model';
import { Question } from './../model/question';
import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';
import { ImportResult } from '../model/import-result';
import { QuestionSubject } from '../enum/question-topic.enum';
import { HttpClient } from '@angular/common/http';
import { QuestionDTO } from '../model/question-dto.model';

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

  getQuestionFromDTO(questionDTO: QuestionDTO) {
    let q: Question = {
      questionText: questionDTO.QuestionText,
      publicId: questionDTO.Subject + "-" + questionDTO.Id,
      questionSubject: QuestionSubject[questionDTO.Subject],
      NGB: this.getNGB(questionDTO.NGB),
      answers: this.getAnswers(questionDTO.GoodAnswers,
        questionDTO.BadAnswers),
      isRetired: false,
      URLVideo: questionDTO.Link,
      answerExplanation: questionDTO.AnswerExplanation
    }
    return q;
  }

  private getNGB(ngb: any) {
    let NGB: NationalGoverningBody = { name: "any", abreviation: "any", location: "any" };
    return NGB;
  }

  private getAnswers(goodAnswers: string[], badAnswers: string[]) {
    let answers: Array<Answer> = [];
    goodAnswers.forEach(a => {
      answers.push({ id: 0, text: a, isGoodAnswer: true, isSelected: false })
    })
    badAnswers.forEach(a => {
      answers.push({ id: 0, text: a, isGoodAnswer: false, isSelected: false })
    })
    return answers;
  }
}



