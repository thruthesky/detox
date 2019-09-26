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
  score: number;


  showResult = false;
  constructor(public a: AppService) {
    a.wp.postGet({ guid: this.guid, autop: false, cacheId: this.guid }).subscribe((post: Post) => {
      if (!post) {
        return;
      }
      this.resetQueries(post);
    }, e => a.error(e));

    // this.showResult = true;

  }

  ngOnInit() { }


  resetQueries(post: Post): void {
    // console.log('post content: ', post.post_content);
    this.queries = post.post_content.split('\n');
    this.checkes = Array(this.queries.length).fill(false);
  }

  onSubmit() {
    //console.log('onSubmit ', this.checkes);
    this.showResult = true;
    this.score = this.checkes.filter(v => v).length;
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
    //console.log(this.checkes.filter(v => v));
    return this.checkes.filter(v => v).length * 4;
  }

  scrollTop(target: Element) {
    target.scrollIntoView({ behavior: "auto", block: "center", inline: "nearest" });
    // target.scrollIntoView();
  }


  getCategory(): string {

    const n = this.checkes.filter(v => v).length;

    if (n === 0) {
      return '정상';
    } else if (n <= 5) {
      return '나쁨';
    } else if (n <= 10) {
      return '위험';
    } else if (n <= 15) {
      return '고위험';
    } else {
      return '환자';
    }
  }

  getColor(): string {

    const n = this.checkes.filter(v => v).length;

    if (n === 0) {
      return '#24a1fc';
    } else if (n <= 5) {
      return '#7db262';
    } else if (n <= 10) {
      return '#ffd13a';
    } else if (n <= 15) {
      return '#d6572f';
    } else {
      return '#ff5353';
    }
  }
}

