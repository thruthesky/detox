import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss'],
})
export class MobileHeaderComponent implements OnInit {




  @Input() title: string;
  @Input() homeIcon: boolean;

  hide = true;

  constructor(
    public a: AppService,
  ) { }

  ngOnInit() { }



}




