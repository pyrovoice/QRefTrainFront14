import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
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
import { MatSortModule } from '@angular/material/sort';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { PopupVideoPlayerComponent } from './component/popup-video-player/popup-video-player.component';
import { PopupQuestionFullComponent } from './component/popup-question-full/popup-question-full.component';

@NgModule({
    declarations: [
        ReportQuestionComponent,
        PopupReportQuestionComponent,
        QuestionFullInfoComponent,
        LoadingPageComponent,
        PopupVideoPlayerComponent,
        PopupQuestionFullComponent

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
        MatAutocompleteModule,
        MatPaginatorModule,
        MatSortModule
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
        QuestionFullInfoComponent,
        MatPaginatorModule,
        MatSortModule,
        LoadingPageComponent
    ],
    providers: [
        UntypedFormBuilder
    ]
})

export class SharedModule {
    constructor() {
    }
}