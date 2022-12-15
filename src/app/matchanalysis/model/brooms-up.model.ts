import { MatchEvent } from './matchevent.model';
import { Player } from "./player.model";

export class BroomsUp {
    public bludgerRunnerA: Player;
    public bludgerRunnerB: Player;
    public quaffleRunnerA: Player;
    public quaffleRunnerB: Player;
    public opposingHalfChaserA: Player;
    public opposingHalfChaserB: Player;
    public beaterA: Player;
    public beaterB: Player;
    public chaserA1: Player;
    public chaserA2: Player;
    public chaserB1: Player;
    public chaserB2: Player;
    public matchEvents: MatchEvent[] = [];
    constructor() { }

    
    public getPlayersA(): Player[]{
        return [this.bludgerRunnerA, this.quaffleRunnerA, this.opposingHalfChaserA, this.beaterA, this.chaserA1, this.chaserA2]
    }

    public getPlayersB(): Player[]{
        return [this.bludgerRunnerB, this.quaffleRunnerB, this.opposingHalfChaserB, this.beaterB, this.chaserB1, this.chaserB2]
    }

    public getPlayers(): Player[]{
        return this.getPlayersA().concat(this.getPlayersB());
    }
}