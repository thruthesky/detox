import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-camera-popover',
  templateUrl: './camera-popover.component.html',
  styleUrls: ['./camera-popover.component.scss'],
})
export class CameraPopoverComponent implements OnInit {

  constructor(

    public popoverController: PopoverController,
  ) { }

  ngOnInit() { }

  onClickImgOption(option: string) {
    this.popoverController.dismiss(option);
  }








}
