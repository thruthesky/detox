import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Post } from 'modules/wordpress-api/services/wordpress-api.interface';

@Component({
  selector: 'app-detoxification-recipe',
  templateUrl: './detoxification-recipe.page.html',
  styleUrls: ['./detoxification-recipe.page.scss'],
})
export class DetoxificationRecipePage implements OnInit {




  recipeTitle = {} as Post;

  constructor(public a: AppService) { 
    this.a.wp.postGetIn( { guid: 'recipeTitle' }  , this.recipeTitle);

  }

  ngOnInit() {
  }

  

}
