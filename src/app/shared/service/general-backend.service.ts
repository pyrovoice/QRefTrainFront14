import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { PopupReportData } from '../component/popup-report-question/popup-report-question.component';
import { Log, LogLevel, LogType } from '../model/log.model';

@Injectable({
  providedIn: 'root'
})
export class GeneralBackendService {

  constructor(private apiService: ApiService) { }

  createQuestionErrorLog(data: PopupReportData) {
    let log: Log = new Log();
    log.Level = LogLevel.INFO;
    log.LogType = LogType.QUESTION_REPORTED;
    log.LogText = data.questionId + ";" + data.subject + ";" + data.details;
    return this.apiService.post("Log/Create", log);
  }
}
