import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Post, Posts } from 'modules/wordpress-api/services/wordpress-api.interface';
import { Subscription } from 'rxjs';
import { IonService } from 'modules/wordpress-api/components/shared/ion-service/ion-service';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { WordpressApiService } from 'modules/wordpress-api/services/wordpress-api.service';

@Component({
  selector: 'app-detoxification-recipe',
  templateUrl: './detoxification-recipe.page.html',
  styleUrls: ['./detoxification-recipe.page.scss'],
})
export class DetoxificationRecipePage implements OnInit {




  recipeTitle = {} as Post;

  slug = 'recipe';

  posts: Posts = [];


  page = 1;
  posts_per_page = 10;
  error = '';

  subscriptions = new Subscription();

  diaryTitle = {} as Post;

  constructor(
    public a: AppService,
    public wp: WordpressApiService,
    private ion: IonService,
    private domSanitizer: DomSanitizer,
    public modalController: ModalController,
    ) { 
    this.a.wp.postGetIn( { guid: 'recipeTitle' }  , this.recipeTitle);

  }

  ngOnInit() {
    this.reset();
    if (!this.slug) {
      this.error = this.wp.t('NoSlug');
      return;
    }

    this.loadPage();
    // console.log(this.posts);
   
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  reset() {
    this.posts = [];
    this.error = '';
    this.page = 1;
  }
  
  loadPage(callback?: (posts: Posts) => void): void {
    const sub = this.wp.postSearch({
      category_name: this.slug,
      paged: this.page,
      posts_per_page: this.posts_per_page,
    }).subscribe((posts: Posts) => {
      // console.log('posts: ', posts);
      this.displayPosts(posts);
      if (callback) {
        callback(posts);
      }
    }, e => this.ion.error({ errcode: '-500', errstring: 'Failed to load post search data' }));
    this.subscriptions.add(sub);
  }

  displayPosts(posts: Posts) {
    if (!posts || !posts.length) {
      return;
    }
    for (const post of posts) {
      this.pre(post);
      this.posts.push(post);
    }
  }

  pre(post: Post) {
    post.post_content_autop = this.domSanitizer.bypassSecurityTrustHtml(post.post_content_autop) as any;
    if (post.comments.length) {
      post.comments.map(comment => {
        comment.comment_content_autop = this.domSanitizer.bypassSecurityTrustHtml(comment.comment_content_autop) as any;
      });
    }
  }

}
