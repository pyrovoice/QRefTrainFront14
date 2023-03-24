import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UntypedFormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ReportQuestionComponent } from './component/report-question-button/report-question-button.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PopupReportQuestionComponent } from './component/popup-report-question/popup-report-question.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { QuestionFullInfoComponent } from './component/question-full-info/question-full-info.component';

@NgModule({
    declarations: [
        ReportQuestionComponent,
        PopupReportQuestionComponent,
        QuestionFullInfoComponent

    ],
    imports: [
        CommonModule,
        MatMenuModule,
        MatSidenavModule,
        FormsModule,
        MatIconModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        TranslateModule,
        MatTableModule,
        MatAutocompleteModule
    ],
    exports: [
        CommonModule,
        MatSidenavModule,
        FormsModule,
        MatIconModule,
        ReactiveFormsModule,
        MatSelectModule,
        ReportQuestionComponent,
        PopupReportQuestionComponent,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        TranslateModule,
        MatTableModule,
        MatAutocompleteModule,
        QuestionFullInfoComponent
    ],
    providers: [
        UntypedFormBuilder
    ]
})

export class SharedModule {
    constructor() {
    }
}