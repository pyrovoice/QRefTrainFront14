import { AnswerResult } from './answer-result.model';
import { QuestionResult } from './question-result';

export class QuizResult {
    public Id: number;
    public QuestionsAsked: QuestionResult[];
    public SelectedAnswers: AnswerResult[];
    public CompleteDate: Date;
    QuizId: number;
}