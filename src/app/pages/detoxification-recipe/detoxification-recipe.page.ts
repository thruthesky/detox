import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-detoxification-recipe',
  templateUrl: './detoxification-recipe.page.html',
  styleUrls: ['./detoxification-recipe.page.scss'],
})
export class DetoxificationRecipePage implements OnInit {

  constructor(public a: AppService) { }

  ngOnInit() {
  }

  

}
