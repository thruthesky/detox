import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-detoxification-recipe-item',
  templateUrl: './detoxification-recipe-item.page.html',
  styleUrls: ['./detoxification-recipe-item.page.scss'],
})
export class DetoxificationRecipeItemPage implements OnInit {

  constructor(public a: AppService) { }

  ngOnInit() {
  }

}
