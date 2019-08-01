import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Posts, Post } from 'modules/wordpress-api/services/wordpress-api.interface';
import { IonInfiniteScroll, ModalController, PopoverController } from '@ionic/angular';
import { WordpressApiService } from 'modules/wordpress-api/services/wordpress-api.service';
import { IonService } from 'modules/wordpress-api/components/shared/ion-service/ion-service';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { IonPostEditComponent } from 'modules/wordpress-api/components/forum/ion-post-edit/ion-post-edit.component';
import { IonPopoverButtonsComponent } from 'modules/wordpress-api/components/shared/ion-popover-buttons/ion-popover-buttons.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  
  slug = 'products';

  posts: Posts = [];


  page = 1;
  posts_per_page = 10;
  error = '';

  subscriptions = new Subscription();
  constructor( 
    public a: AppService,
    public wp: WordpressApiService,
    private ion: IonService,
    private domSanitizer: DomSanitizer,
    private modalController: ModalController,
    private popoverController: PopoverController
    )
   { 
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

  updatePost(post: Post) {
    const i = this.posts.findIndex(v => v.ID === post.ID);
    if (i === -1) {
      return this.ion.error({ errcode: '-510', errstring: this.wp.t('postNotFoundToUpdateOnPostList') });
    }
    this.posts.splice(i, 1, post);
  }

  deletePost(ID: string) {
    const i = this.posts.findIndex(v => v.ID === ID);
    if (i === -1) {
      return this.ion.error({ errcode: '-510', errstring: this.wp.t('postNotFoundToDeleteOnPostList') });
    }
    this.posts.splice(i, 1);
  }


  async onClickPost() {
    const modal = await this.modalController.create({
      component: IonPostEditComponent,
      componentProps: {
        slug: this.slug,
        header: {
          color: 'primary',
          title: this.wp.t('Add Product', { name: this.wp.t(this.slug) })
        }
      }
    });
    modal.present();
    const res = await modal.onWillDismiss();
    if (res && res.data) {
      this.pre(res.data);
      console.log('post created: ', res.data);
      this.posts.unshift(res.data);
    }
  }

  async onEdit(post: Post) {
    // console.log('Going to edit post: ', post);
    const modal = await this.modalController.create({
      component: IonPostEditComponent,
      componentProps: {
        post: post,
        header: {
          color: 'primary',
          title: this.wp.t('titleEditPost')
        }
      }
    });
    modal.present();
    const res = await modal.onWillDismiss();
    if (res && res.data) {
      console.log('post updated', res.data);
      this.pre(res.data);
      this.updatePost(res.data);
    }
  }

  async onDelete(post: Post) {
    const sub = this.wp.postDelete(post.ID).subscribe(res => {
      console.log('post delete: ', res);
      this.deletePost(res.ID);
    }, e => this.ion.error(e));
    this.subscriptions.add(sub);
  }

  async onClickMore(post: Post, event: Event) {
    const popover = await this.popoverController.create({
      component: IonPopoverButtonsComponent,
      event: event,
      translucent: true,
      mode: 'ios',
      componentProps: {
        data: post,
        items: [
          { label: this.wp.t('Edit'), icon: 'create', role: 'edit' },
          { label: this.wp.t('Delete'), icon: 'trash', role: 'delete' },
          { label: this.wp.t('Close'), icon: 'close', role: 'close' },
        ]
      }
    });
    popover.present();
    const re = await popover.onWillDismiss();
    if (re.role === 'backdrop' || re.role === 'close') {
      return;
    } else if (re.role === 'edit') {
      if (this.wp.isMyPost(post)) {
        await this.onEdit(re.data);
      } else {
        this.ion.error({ errcode: '-4', errstring: this.wp.t('notYourPost') });
      }

    } else if (re.role === 'delete') {
      if (this.wp.isMyPost(post)) {
        await this.onDelete(re.data);
      } else {
        this.ion.error({ errcode: '-4', errstring: this.wp.t('notYourPost') });
      }
    }
  }


  loadMore(event: any) {
    console.log('load more event: ', event);

    this.page++;
    this.loadPage(posts => {
      event.target.complete();
      if (posts.length) {
        if (posts.length < this.posts_per_page) {
          this.disableInfiniteScroll();
        }
      } else {
        this.disableInfiniteScroll();
      }
    });
  }

  disableInfiniteScroll() {
    this.infiniteScroll.disabled = true;
  }

}
