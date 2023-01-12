export interface QuestionDTO {
    Id: number;
    QuestionText: string;
    GoodAnswers: string[];
    BadAnswers: string[];
    AnswerExplanation: string;
    NGB: string;
    Link: string;
    Subject: string;
}