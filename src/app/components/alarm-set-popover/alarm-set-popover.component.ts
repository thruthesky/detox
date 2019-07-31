import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-alarm-set-popover',
  templateUrl: './alarm-set-popover.component.html',
  styleUrls: ['./alarm-set-popover.component.scss'],
})
export class AlarmSetPopoverComponent implements OnInit {

  constructor(public pop: PopoverController) { }

  ngOnInit() {}

}
