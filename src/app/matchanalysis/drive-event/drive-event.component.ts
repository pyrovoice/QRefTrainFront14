import { MatchService } from './../model/match.service';
import { Strategy } from './../model/strategy.factory';
import { Component, OnInit, Input } from '@angular/core';
import { Drive } from '../model/drive.model';

@Component({
  selector: 'app-drive-event',
  templateUrl: './drive-event.component.html',
  styleUrls: ['./drive-event.component.scss']
})
export class DriveEventComponent implements OnInit {
  @Input() drive: Drive;
  defStrategies = Strategy.defStrategies;
  offStrategies = Strategy.offStrategies;
  constructor(public teamsService: MatchService) { }

  ngOnInit(): void {
  }

}
