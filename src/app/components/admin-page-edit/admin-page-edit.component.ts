import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-admin-page-edit',
  templateUrl: './admin-page-edit.component.html',
  styleUrls: ['./admin-page-edit.component.scss'],
})
export class AdminPageEditComponent implements OnInit {

  constructor(
    public a: AppService
  ) { }

  ngOnInit() { }

}

