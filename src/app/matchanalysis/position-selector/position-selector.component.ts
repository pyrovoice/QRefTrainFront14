
import { PitchPosition } from './../model/pitch-position.enum';
import { Component, Output, EventEmitter, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { PitchSide } from '../model/pitch-side.enum';
import { Positions } from '../model/position-from-to.model';


@Component({
  selector: 'app-position-selector',
  templateUrl: './position-selector.component.html',
  styleUrls: ['./position-selector.component.scss']
})
export class PositionSelectorComponent implements OnChanges{
  
  behindHoops = 25;
  keeperLineY = 58;
  midPointY = 78;
  midlineY = 94;
  @Input() position: Positions;
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
    if (!this.position) {
      this.position = new Positions();
    }
    if (this.position.fromPos != null) {
      this.checkBoxFrom = this.checkboxes.filter(c => c.pos == this.position.fromPos && c.side == this.position.fromSide)[0];
    }
    if (this.position.toPos != null) {
      this.checkBoxTo = this.checkboxes.filter(c => c.pos == this.position.toPos && c.side == this.position.toSide)[0];
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
    this.position.fromPos = this.checkBoxFrom?.pos;
    this.position.fromSide = this.checkBoxFrom?.side;
    this.position.toPos = this.checkBoxTo?.pos;
    this.position.toSide = this.checkBoxTo?.side;
  }
}
