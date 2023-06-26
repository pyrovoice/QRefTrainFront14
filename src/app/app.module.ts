import { SharedModule } from './shared/shared.module';
import { MatchanalysisModule } from './matchanalysis/matchanalysis.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionListingTableComponent } from './question-listing-table/question-listing-table.component';



@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    QuestionListingTableComponent
  ],
  imports: [
    BrowserModule,    

    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatchanalysisModule,
    HttpClientModule,
    CommonModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
