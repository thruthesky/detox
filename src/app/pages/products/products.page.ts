import { Component, OnInit, Input, ViewChild, OnDestroy } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Posts, Post } from 'modules/wordpress-api/services/wordpress-api.interface';
import { IonInfiniteScroll, ModalController, PopoverController } from '@ionic/angular';
import { WordpressApiService } from 'modules/wordpress-api/services/wordpress-api.service';
import { IonService } from 'modules/wordpress-api/components/shared/ion-service/ion-service';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit, OnDestroy {


  // @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;

  slug = 'products';



  posts: Posts = [];



  page = 1;
  posts_per_page = 10;
  error = '';


  inLoading = false;
  noMorePosts = false;

  subscriptions = new Subscription();
  constructor(
    public a: AppService,
    public wp: WordpressApiService,
    private ion: IonService,
    private domSanitizer: DomSanitizer,
  ) {
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


  get loadOptions(): any {
    return {
      category_name: this.slug,
      paged: this.page,
      posts_per_page: this.posts_per_page,
    };
  }

  loadPage(options?: any): void {
    if (this.inLoading || this.noMorePosts) {
      return;
    }
    const sub = this.wp.postSearch(this.loadOptions).subscribe((posts: Posts) => {
      this.inLoading = false;
      this.displayPosts(posts);
      this.page++;
      if (this.hasNoMorePosts(posts)) {
        this.noMorePosts = true;
      }
      if (options) {
        options.scroll.complete();
        if (this.hasNoMorePosts(posts)) {
          options.scroll.disabled = true;
        }
      }
    }, e => this.ion.error({ errcode: '-500', errstring: 'Failed to load post search data' }));
    this.subscriptions.add(sub);
  }


  hasNoMorePosts(posts: Posts): boolean {
    if (posts && posts.length && posts.length === this.posts_per_page) {
      return false;
    } else {
      return true;
    }
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


  // loadMore(event: any) {
  //   // console.log('load more event: ', event);

  //   this.page++;
  //   this.loadPage(posts => {
  //     event.target.complete();
  //     if (posts.length) {
  //       if (posts.length < this.posts_per_page) {
  //         this.disableInfiniteScroll();
  //       }
  //     } else {
  //       this.disableInfiniteScroll();
  //     }
  //   });
  // }



  loadData(event: any) {
    if (this.noMorePosts) {
      event.target.complete();
      return;
    }
    this.loadPage({ scroll: event.target });
  }

}
