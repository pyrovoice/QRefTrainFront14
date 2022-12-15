import { MatchEvent } from './matchevent.model';
import { BroomsUp } from './brooms-up.model';
import { Injectable } from "@angular/core";
import { PlayerPosition } from "./player-position.enum";
import { Player } from "./player.model";
import { Team } from "./team.model";
import { Drive } from './drive.model';
import { Ball } from './ball.enum';

@Injectable()
export class MatchService {
    teamA: Team = new Team();
    teamB: Team = new Team();
    broomsUp: BroomsUp = new BroomsUp();
    drives: Drive[] = [];

    constructor() {
        this.teamA.isA = true;
        this.teamA.name = "Team A";
        this.teamA.players.push(Player.getNewPlayer2(0, PlayerPosition.Keeper, "1", "KeeperA"));
        this.teamA.players.push(Player.getNewPlayer2(1, PlayerPosition.Chaser, "2", "ChaserA2"));
        this.teamA.players.push(Player.getNewPlayer2(2, PlayerPosition.Chaser, "3", "ChaserA3"));
        this.teamA.players.push(Player.getNewPlayer2(3, PlayerPosition.Chaser, "4", "ChaserA4"));
        this.teamA.players.push(Player.getNewPlayer2(4, PlayerPosition.Beater, "5", "BeaterA5"));
        this.teamA.players.push(Player.getNewPlayer2(5, PlayerPosition.Beater, "6", "BeaterA6"));
        this.teamB.isA = false;
        this.teamB.name = "Team B";
        this.teamB.players.push(Player.getNewPlayer2(0, PlayerPosition.Keeper, "1", "KeeperB"));
        this.teamB.players.push(Player.getNewPlayer2(1, PlayerPosition.Chaser, "2", "ChaserB2"));
        this.teamB.players.push(Player.getNewPlayer2(2, PlayerPosition.Chaser, "3", "ChaserB3"));
        this.teamB.players.push(Player.getNewPlayer2(3, PlayerPosition.Chaser, "4", "ChaserB4"));
        this.teamB.players.push(Player.getNewPlayer2(4, PlayerPosition.Beater, "5", "BeaterB5"));
        this.teamB.players.push(Player.getNewPlayer2(5, PlayerPosition.Beater, "6", "BeaterB6"));
    }

    public addPlayer(isTeamA: boolean) {
        if (isTeamA) {
            this.teamA.players.push(new Player(this.teamA.players.length));
        }
    }

    public getOutsidePlayers(teamA: boolean, ball: Ball, playersToExclude: Player[]): Player[] {
        let t = teamA ? this.teamA : this.teamB;
        let possiblePositions = this.getPossiblePositionsForBall(ball);
        return t.players.filter(p => possiblePositions.includes(p.playerPosition) && !playersToExclude.includes(p));
    }

    public getAvailablePlayersBroomsUp(teamA: boolean, targetBall: Ball): Player[] {
        let t = teamA ? this.teamA : this.teamB;
        let possiblePositions = this.getPossiblePositionsForBall(targetBall);
        return t.players.filter(p => possiblePositions.includes(p.playerPosition));
    }

    private getPossiblePositionsForBall(targetBall: Ball) {
        let possiblePositions = [];
        switch (targetBall) {
            case Ball.Quaffle:
                possiblePositions = [PlayerPosition.Chaser, PlayerPosition.Keeper];
                break;
            case Ball.Bludger:
                possiblePositions = [PlayerPosition.Beater];
                break;
            case Ball.Snitch:
                possiblePositions = [PlayerPosition.Seeker];
                break;
        }
        return possiblePositions;
    }


    public getPreviousPlayersOnPitch(drive: Drive): Player[] {
        let lastDriveWithMatchEvent: Drive = null;
        for (let i = this.drives.indexOf(drive); i > 0; i--) {
            if (this.drives[i].matchEvents.length > 0) {
                lastDriveWithMatchEvent = this.drives[i];
                break;
            }
        }
        if (lastDriveWithMatchEvent != null) {
            return lastDriveWithMatchEvent.matchEvents[lastDriveWithMatchEvent.matchEvents.length - 1].playersOnPitch;
        } else {
            return this.broomsUp.getPlayersA().concat(this.broomsUp.getPlayersB());
        }
    }
}