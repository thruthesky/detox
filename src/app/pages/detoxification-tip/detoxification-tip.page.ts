import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Post, Posts } from 'modules/wordpress-api/services/wordpress-api.interface';
import { WordpressApiService } from 'modules/wordpress-api/services/wordpress-api.service';
import { IonService } from 'modules/wordpress-api/components/shared/ion-service/ion-service';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detoxification-tip',
  templateUrl: './detoxification-tip.page.html',
  styleUrls: ['./detoxification-tip.page.scss'],
})
export class DetoxificationTipPage implements OnInit {


  tipTitle = {} as Post;



  slug = 'tips';

  posts: Posts = [];


  guid = 'tipTitle';
  page = 1;
  posts_per_page = 10;
  error = '';

  subscriptions = new Subscription();
  constructor(
    public a: AppService,
    public wp: WordpressApiService,
    private ion: IonService,
    private domSanitizer: DomSanitizer,
  ) {
    this.a.wp.postGetIn({ guid: this.guid }, this.tipTitle);

  }

  reset() {
    this.posts = [];
    this.error = '';
    this.page = 1;
  }



  ngOnInit() {
    this.reset();
    if (!this.slug) {
      this.error = this.wp.t('NoSlug');
      return;
    }

    this.loadPage();

    console.log(this.posts, 'this posts');

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
