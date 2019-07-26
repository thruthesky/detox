import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-toxin-test',
  templateUrl: './toxin-test.component.html',
  styleUrls: ['./toxin-test.component.scss'],
})
export class ToxinTestComponent implements OnInit {

  constructor(public a: AppService) { }

  ngOnInit() {}

}
