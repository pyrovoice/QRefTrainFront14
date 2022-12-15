import { MatchEvent } from '../model/matchevent.model';
import { MatchEventType } from '../model/matcheventtype.enum';
import { Strategy } from '../model/strategy.factory';
import { Drive } from '../model/drive.model';
import { ChangeDetectorRef, Component, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatchService } from '../model/match.service';
import { BroomsUp } from '../model/brooms-up.model';

@Component({
  selector: 'app-match-analysis',
  templateUrl: './match-analysis.component.html',
  styleUrls: ['./match-analysis.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class MatchAnalysisComponent implements OnInit {
  MatchEventType = MatchEventType
  dataSource;

  @ViewChildren('innerTables') innerTables: QueryList<MatTable<MatchEvent>>;
  columnsToDisplay;
  columnsToDisplayWithNames: Array<any> = [
    {
      key: 'startTimeSecond',
      header: 'Start Time (s)'
    }, {
      key: 'attackingTeam',
      header: 'Attacking Team'
    }, {
      key: 'TeamWithBC',
      header: 'Bludger Control'
    }
  ]
  innerDisplayedColumnsWithNames: Array<any> = [
    {
      key: 'player',
      header: 'Player'
    }, {
      key: 'matchEventType',
      header: 'Event'
    }, {
      key: 'commentary',
      header: 'More'
    }
  ]
  innerDisplayedColumns;
  expandedElement: Drive | null;
  selectedElement: BroomsUp | Drive | MatchEvent | null;

  constructor(public matchService: MatchService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    // Manages columns name and displayed data so header name don't have to fit variables names
    this.columnsToDisplay = this.columnsToDisplayWithNames.map(col => col.key);
    this.innerDisplayedColumns = this.innerDisplayedColumnsWithNames.map(col => col.key);
    this.selectEvent(this.matchService.broomsUp);
  }

  toggleRow(element: Drive) {
    this.expandedElement = element
    //element.matchEvents && element.matchEvents.length ? (this.expandedElement = this.expandedElement === element ? null : element) : null;
    this.selectEvent(element)
    this.cd.detectChanges();
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key == "Enter") {
      if (this.expandedElement == null) {
        return;
      }
      let m;
      m = new MatchEvent(this.matchService.teamA.players[0].playerName, MatchEventType.Pass, this.matchService.getPreviousPlayersOnPitch(this.expandedElement))
      this.expandedElement.matchEvents.push(m);
      this.selectEvent(m);
      event.preventDefault();
    } 
    //TODO Fix
    else if (event.shiftKey) {
      this.addNewDrive();
    }
  }

  addNewDrive() {
    this.expandedElement = new Drive(0, this.matchService.teamA, this.matchService.teamA, Strategy.Box(), Strategy.GetOneTwoOne());
    this.matchService.drives.push(this.expandedElement);
    this.selectEvent(this.expandedElement);
    this.dataSource = new MatTableDataSource<Drive>(this.matchService.drives);
  }


  getMatchEventsAsDatasource(element: Drive): MatTableDataSource<MatchEvent> {
    return new MatTableDataSource<MatchEvent>(element.matchEvents);
  }

  selectEvent(row) {
    this.selectedElement = row;
  }

  isDrive(): boolean {
    return this.selectedElement != null && this.selectedElement instanceof Drive;
  }

  isMatchEvent(): boolean {
    return this.selectedElement != null && this.selectedElement instanceof MatchEvent;
  }

  isBroomsUp(): boolean {
    return this.selectedElement != null && this.selectedElement instanceof BroomsUp;
  }
}
