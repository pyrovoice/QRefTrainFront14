export enum LogLevel {
    TRACE, INFO, WARN, ERROR, FATAL
}

export enum LogType {
    MAIL_SENT, QUIZ_FINISHED, QUESTION_REPORTED, ERROR
}

export class Log {
    Level: LogLevel;
    LogText: String;
    LogType: LogType;
}