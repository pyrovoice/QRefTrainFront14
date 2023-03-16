import { QuestionSubject } from '../enum/question-topic.enum';
import { AnswerResult } from './answer-result.model';

export class QuestionResult {
     Id: number;
     questionSubject: QuestionSubject;
     GifName?: String;
     questionText: String;
     AnswerExplanation: string;
     Answers: AnswerResult[];
}