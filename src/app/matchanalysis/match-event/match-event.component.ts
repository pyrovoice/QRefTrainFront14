import { MatchService } from './../model/match.service';
import { Component, OnInit, Input, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import { MatchEvent } from '../model/matchevent.model';
import { MatchEventType } from '../model/matcheventtype.enum';
import { PitchPosition } from '../model/pitch-position.enum';
import { PitchSide } from '../model/pitch-side.enum';
import { Positions } from '../model/position-from-to.model';

@Component({
  selector: 'app-match-event',
  templateUrl: './match-event.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./match-event.component.scss']
})
export class MatchEventComponent implements OnInit {
  @Input() matchEvent: MatchEvent;
  keys = Object.keys;
  MatchEventType = MatchEventType;

  constructor(public matchService: MatchService) { }

  ngOnInit(): void {
    
  }

  behindHoops = 25;
  keeperLineY = 58;
  midPointY = 78;
  midlineY = 94;
  checkboxes: Array<any> = [
    {
      value: false,
      id: "farbehindleft",
      posXPercent: 10,
      posYPercent: 10,
      pos: PitchPosition.FarBehind,
      side: PitchSide.Left
    }, {
      value: false,
      id: "farbehind",
      posXPercent: 49,
      posYPercent: 10,
      pos: PitchPosition.FarBehind,
      side: PitchSide.Middle
    }, {
      value: false,
      id: "farbehindright",
      posXPercent: 90,
      posYPercent: 10,
      pos: PitchPosition.FarBehind,
      side: PitchSide.Right
    }, {
      value: false,
      id: "behindleft",
      posXPercent: 20,
      posYPercent: this.behindHoops,
      pos: PitchPosition.Behind,
      side: PitchSide.Left
    }, {
      value: false,
      id: "behind",
      posXPercent: 49,
      posYPercent: this.behindHoops,
      pos: PitchPosition.Behind,
      side: PitchSide.Middle
    }, {
      value: false,
      id: "behindleft",
      posXPercent: 80,
      posYPercent: this.behindHoops,
      pos: PitchPosition.Behind,
      side: PitchSide.Right
    }, {
      value: false,
      id: "behindHoops",
      posXPercent: 49,
      posYPercent: 40,
      pos: PitchPosition.HoopsBehind,
      side: PitchSide.Middle
    },
    {
      value: false,
      id: "hoopsLeft",
      posXPercent: 20,
      posYPercent: 43,
      pos: PitchPosition.Hoops,
      side: PitchSide.Left
    },
    {
      value: false,
      id: "hoopsRight",
      posXPercent: 80,
      posYPercent: 43,
      pos: PitchPosition.Hoops,
      side: PitchSide.Right
    },
    {
      value: false,
      id: "frontHoops",
      posXPercent: 49,
      posYPercent: 45,
      pos: PitchPosition.HoopsFront,
      side: PitchSide.Middle
    },
    {
      value: false,
      id: "keeperLine",
      posXPercent: 49,
      posYPercent: this.keeperLineY,
      pos: PitchPosition.HoopsFront,
      side: PitchSide.Middle
    },
    {
      value: false,
      id: "keeperLineLeft",
      posXPercent: 20,
      posYPercent: this.keeperLineY,
      pos: PitchPosition.HoopsFront,
      side: PitchSide.Left
    },
    {
      value: false,
      id: "keeperLineRight",
      posXPercent: 80,
      posYPercent: this.keeperLineY,
      pos: PitchPosition.HoopsFront,
      side: PitchSide.Right
    },
    {
      value: false,
      id: "midpoint",
      posXPercent: 49,
      posYPercent: this.midPointY,
      pos: PitchPosition.Midpoint,
      side: PitchSide.Middle
    },
    {
      value: false,
      id: "midpointLeft",
      posXPercent: 20,
      posYPercent: this.midPointY,
      pos: PitchPosition.Midpoint,
      side: PitchSide.Left
    },
    {
      value: false,
      id: "midpointRight",
      posXPercent: 80,
      posYPercent: this.midPointY,
      pos: PitchPosition.Midpoint,
      side: PitchSide.Right
    },
    {
      value: false,
      id: "midline",
      posXPercent: 49,
      posYPercent: this.midlineY,
      pos: PitchPosition.Midline,
      side: PitchSide.Middle
    },
    {
      value: false,
      id: "midlineLeft",
      posXPercent: 10,
      posYPercent: this.midlineY,
      pos: PitchPosition.Midline,
      side: PitchSide.Left
    },
    {
      value: false,
      id: "midlineRight",
      posXPercent: 90,
      posYPercent: this.midlineY,
      pos: PitchPosition.Midline,
      side: PitchSide.Right
    }
  ]
  checkBoxFrom = null;
  checkBoxTo = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.matchEvent.fromTo) {
      this.matchEvent.fromTo = new Positions();
    }
    this.checkboxes.forEach(c => c.value = false);
    this.checkBoxFrom = null;
    this.checkBoxTo = null;
    if (this.matchEvent.fromTo.fromPos != null) {
      this.checkBoxFrom = this.checkboxes.filter(c => c.pos == this.matchEvent.fromTo.fromPos && c.side == this.matchEvent.fromTo.fromSide)[0];
      this.checkBoxFrom.value = true;
    }
    if (this.matchEvent.fromTo.toPos != null) {
      this.checkBoxTo = this.checkboxes.filter(c => c.pos == this.matchEvent.fromTo.toPos && c.side == this.matchEvent.fromTo.toSide)[0];
      this.checkBoxTo.value = true;
    }

  }

  //Remove the closest checkbox is the check would add more than 2 values
  onChange(checkbox) {
    if (checkbox.value) {
      if (this.checkBoxFrom == null) {
        this.checkBoxFrom = checkbox;
      } else if (this.checkBoxTo == null) {
        this.checkBoxTo = checkbox;
      } else {
        let i = this.checkboxes.indexOf(checkbox);
        let a = this.checkboxes.indexOf(this.checkBoxFrom);
        let b = this.checkboxes.indexOf(this.checkBoxTo);
        if (Math.abs(a - i) >= Math.abs(b - i)) {
          this.checkBoxFrom.value = false;
          this.checkBoxFrom = checkbox
        } else {
          this.checkBoxTo.value = 0;
          this.checkBoxTo = checkbox
        }
      }
    }
    else {
      if (checkbox == this.checkBoxFrom) { this.checkBoxFrom = null; }
      if (checkbox == this.checkBoxTo) { this.checkBoxTo = null; }
    }
    this.matchEvent.fromTo.fromPos = this.checkBoxFrom?.pos;
    this.matchEvent.fromTo.fromSide = this.checkBoxFrom?.side;
    this.matchEvent.fromTo.toPos = this.checkBoxTo?.pos;
    this.matchEvent.fromTo.toSide = this.checkBoxTo?.side;
  }
}
