import { MatchService } from './../model/match.service';
import { BroomsUp } from './../model/brooms-up.model';
import { PlayerPosition } from './../model/player-position.enum';
import { Component, OnInit } from '@angular/core';
import { Team } from '../model/team.model';
import { Ball } from '../model/ball.enum';
import { Player } from '../model/player.model';

@Component({
  selector: 'app-brooms-up-event',
  templateUrl: './brooms-up-event.component.html',
  styleUrls: ['./brooms-up-event.component.scss']
})
export class BroomsUpEventComponent implements OnInit {
  Ball = Ball;

  constructor(public matchService: MatchService) { }

  ngOnInit(): void {

  }

  getAvailablePlayers(teamA: boolean, ball: Ball, player: Player): Player[] {
    let players = this.matchService.getOutsidePlayers(teamA, ball, this.matchService.broomsUp.getPlayers());
    if (player) {
      players.push(player);
    }
    return players;
  }
}
