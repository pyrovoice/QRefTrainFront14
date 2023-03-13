import { QuestionSubject } from '../enum/question-topic.enum';
import { NationalGoverningBody } from './national-governing-body.model';
import { Answer } from './answer.model';

export class Question {
     id: number;
     questionSubject: QuestionSubject;
     URLVideo?: String;
     questionText: String;
     answers: Answer[];
}