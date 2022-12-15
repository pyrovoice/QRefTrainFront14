import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchanalysisRoutingModule } from './matchanalysis-routing.module';
import { DriveEventComponent } from './drive-event/drive-event.component';
import { MatchAnalysisComponent } from './match-analysis/match-analysis.component';
import { NewMatchComponent } from './new-match/new-match.component';
import { NewPlayerLineComponent } from './new-player-line/new-player-line.component';
import { PositionSelectorComponent } from './position-selector/position-selector.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatchService } from './model/match.service';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatchEventComponent } from './match-event/match-event.component';
import { BroomsUpEventComponent } from './brooms-up-event/brooms-up-event.component';


@NgModule({
  declarations: [
    MatchAnalysisComponent,
    NewMatchComponent,
    NewPlayerLineComponent,
    MatchEventComponent,
    DriveEventComponent,
    PositionSelectorComponent,
    BroomsUpEventComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRippleModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatchanalysisRoutingModule
  ],
  providers: [
    MatchService
  ],
})
export class MatchanalysisModule { }
