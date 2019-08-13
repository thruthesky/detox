import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Post } from 'modules/wordpress-api/services/wordpress-api.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detoxification-recipe-item',
  templateUrl: './detoxification-recipe-item.page.html',
  styleUrls: ['./detoxification-recipe-item.page.scss'],
})
export class DetoxificationRecipeItemPage implements OnInit {


  post: Post;

  constructor(
    public a: AppService,
    public activatedRoute: ActivatedRoute
    ) { 
    activatedRoute.paramMap.subscribe(params => {
      this.a.wp.postGet({ ID: params.get('ID') }).subscribe(post => {
        this.post = post;
        console.log(this.post);
      }, e => this.a.error(e));
    });
  

  }

  ngOnInit() {
  }


}
