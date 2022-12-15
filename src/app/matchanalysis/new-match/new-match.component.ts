
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from '../model/match.service';

@Component({
  selector: 'app-new-match',
  templateUrl: './new-match.component.html',
  styleUrls: ['./new-match.component.scss']
})
export class NewMatchComponent {

  constructor(private router: Router, public matchService: MatchService){}

  addPlayer(isTeamA: boolean){
    if(isTeamA){
      this.matchService.addPlayer(isTeamA);
    } 
  }

  moveToMatch(){
    this.router.navigate(['/matchanalysis/match']);
  }
}
