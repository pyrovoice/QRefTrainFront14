import { MatchEventType } from './matcheventtype.enum';
import { Player } from './player.model';
import { Positions } from './position-from-to.model';

export class MatchEvent {
    public player: string;
    public matchEventType: MatchEventType;
    public additionalInformation: string = "";
    public commentary: string = "";
    public parentMatchEvent: MatchEvent = null;
    public playerTo: Player;
    public fromTo: Positions = new Positions();
    public playersOnPitch: Player[] = [];

    constructor(p: string, matchEventType: MatchEventType, playersOnPitch: Player[]) {
        this.player = p;
        this.matchEventType = matchEventType;
        this.playersOnPitch = playersOnPitch;
    }
}