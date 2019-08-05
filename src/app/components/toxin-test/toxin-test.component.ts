import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Post } from 'modules/wordpress-api/services/wordpress-api.interface';

@Component({
  selector: 'app-toxin-test',
  templateUrl: './toxin-test.component.html',
  styleUrls: ['./toxin-test.component.scss'],
})
export class ToxinTestComponent implements OnInit {


  guid = 'toxin-test';
  queries = [];
  checkes = [];

  showResult = false;
  constructor(public a: AppService) {
    a.wp.postGet({ guid: this.guid, autop: false, cacheId: this.guid }).subscribe((post: Post) => {
      if (!post) {
        return;
      }
      this.resetQueries(post);
    }, e => a.error(e));
  }

  ngOnInit() { }


  resetQueries(post: Post): void {
    // console.log('post content: ', post.post_content);
    this.queries = post.post_content.split('\n');
    this.checkes = Array(this.queries.length).fill(false);
  }

  onSubmit() {
    console.log('onSubmit ', this.checkes);
    this.showResult = true;
  }


  get scoreWidth(): number {
    // this.checkes =  [
    //   true,
    //   true,
    //   true,
    //   true,
    //   true,
      
    //   true,
    //   true,
    //   true,
    //   true,
      
      
    // ]; // TEST
    console.log(this.checkes.filter(v => v));
    return this.checkes.filter(v => v).length * 10;
  }
}

