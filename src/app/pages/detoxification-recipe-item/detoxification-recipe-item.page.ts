import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Post, Posts } from 'modules/wordpress-api/services/wordpress-api.interface';
import { ActivatedRoute } from '@angular/router';
import { $ } from 'protractor';

@Component({
  selector: 'app-detoxification-recipe-item',
  templateUrl: './detoxification-recipe-item.page.html',
  styleUrls: ['./detoxification-recipe-item.page.scss'],
})
export class DetoxificationRecipeItemPage implements OnInit {


  post:Post;

  posts: { [key: string]: Post } = {};

  recipeTitle = {} as Post;


  constructor(
    public a: AppService,
    public activatedRoute: ActivatedRoute
    ) { 
    activatedRoute.paramMap.subscribe(params => {
      this.a.wp.postGet({ ID: params.get('ID') }).subscribe(post => {
        this.post = post;
     
        console.log(this.post);
        this.posts = {};
        for (let i = 0; i < 1; i++) {
          const guid = `${this.post.ID}-${i}`;
          this.posts[guid] = {} as any;
          this.a.wp.postGetIn({ guid: guid }, this.posts[guid]);
        }
      }, e => this.a.error(e));
    });

    this.a.wp.postGetIn( { guid: 'recipeTitle' }  , this.recipeTitle);
 
  

  }

  ngOnInit() {
  }

  // steps() : object {
  //   // console.log(Object.entries(this.posts).splice(2).map(entry => entry[1])) ;
  //   return Object.entries(this.posts).splice(2).map(entry => entry[1]);



  // }

}
