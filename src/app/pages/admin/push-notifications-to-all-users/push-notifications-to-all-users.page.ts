import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-push-notifications-to-all-users',
  templateUrl: './push-notifications-to-all-users.page.html',
  styleUrls: ['./push-notifications-to-all-users.page.scss'],
})
export class PushNotificationsToAllUsersPage implements OnInit {

  title = '';
  body = '';
  url = '';
  constructor(
    public a: AppService,
    activateRoute: ActivatedRoute
  ) {
    activateRoute.paramMap.subscribe(params => {
      if ( params.get('ID') === '0' ) {
        alert('Select a post');
        return;
      }
      a.wp.postGet({ ID: params.get('ID'), autop: false }).subscribe(post => {
        // consoe.log('post: ', post);
        this.title = post.post_title;
        this.body = post.post_content;
        this.url = 'https://7detox.co.kr/post/view/' + post.ID;
      });
    });
  }

  ngOnInit() {
  }

  onClickSendMessage() {
    const data = {
      topic: '7detox',
      title: this.title,
      body: this.body,
      click_action: this.url
    };
    this.a.wp.sendMessageToTopic(data).subscribe(res => {
      // consoe.log('message sent: ', res);
    });
  }

}
