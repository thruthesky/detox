import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Post } from 'modules/wordpress-api/services/wordpress-api.interface';

@Component({
  selector: 'app-detoxification-diary',
  templateUrl: './detoxification-diary.page.html',
  styleUrls: ['./detoxification-diary.page.scss'],
})
export class DetoxificationDiaryPage implements OnInit {


  diaryTitle = {} as Post;

  constructor(public a: AppService) { 
    this.a.wp.postGetIn( { guid: 'diaryTitle' }  , this.diaryTitle);
  }

  ngOnInit() {
  }

}
