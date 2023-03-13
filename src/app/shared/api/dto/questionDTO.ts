import { Answer } from './../../model/answer.model';
import { NationalGoverningBody } from './../../model/national-governing-body.model';
import { QuestionSubject } from 'src/app/shared/enum/question-topic.enum';

export class AnswerDTO {
    Id: number;
    Answertext: string;
}
export class QuestionDTO {
    Id: number;
    Subject: QuestionSubject;
    GifName: string;
    QuestionText: string;
    AnswerExplanation: string;
    NationalGoverningBodies: NationalGoverningBody;
    Answers: AnswerDTO[];
}
