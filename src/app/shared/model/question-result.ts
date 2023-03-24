import { QuestionSubject } from '../enum/question-topic.enum';
import { AnswerResult } from './answer-result.model';

export class Tags{
     Id: number;
     TagName: string;
}

export class QuestionResult {
     Id: number;
     questionSubject: QuestionSubject;
     GifName?: String;
     questionText: String;
     AnswerExplanation: string;
     Answers: AnswerResult[];
     Tags: Tags[];
}