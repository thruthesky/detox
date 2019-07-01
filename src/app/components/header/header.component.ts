import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title = '';
  @Input() homeIcon: boolean;
  constructor(
    public a: AppService
  ) { }

  ngOnInit() { }

}


