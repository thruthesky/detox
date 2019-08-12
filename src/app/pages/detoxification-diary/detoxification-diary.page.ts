import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Post, Posts } from 'modules/wordpress-api/services/wordpress-api.interface';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { WordpressApiService } from 'modules/wordpress-api/services/wordpress-api.service';
import { IonService } from 'modules/wordpress-api/components/shared/ion-service/ion-service';
import { DomSanitizer } from '@angular/platform-browser';
import { IonPostEditComponent } from 'modules/wordpress-api/components/forum/ion-post-edit/ion-post-edit.component';

@Component({
  selector: 'app-detoxification-diary',
  templateUrl: './detoxification-diary.page.html',
  styleUrls: ['./detoxification-diary.page.scss'],
})
export class DetoxificationDiaryPage implements OnInit {

  
  slug = 'diary';

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
    )
   { 
    this.a.wp.postGetIn( { guid: 'diaryTitle' }  , this.diaryTitle);

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

    /// This is for test
    // setTimeout(() => this.onClickPost(), 200);

  }


  ngOnDestroy() {
    this.subscriptions.unsubscribe();
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

  async onClickPost() {
    const modal = await this.modalController.create({
      component: IonPostEditComponent,
      componentProps: {
        slug: this.slug,
        header: {
          color: 'primary',
          title: this.wp.t('Diary', { name: this.wp.t(this.slug) })
        }
      }
    });
    modal.present();
    const res = await modal.onWillDismiss();
    if (res && res.data) {
      this.pre(res.data);
      //console.log('post created: ', res.data);
      this.posts.unshift(res.data);
    }
  }

  



}
