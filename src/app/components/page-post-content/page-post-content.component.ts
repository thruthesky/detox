import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'modules/wordpress-api/wordpress-api.interface';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-page-post-content',
  templateUrl: './page-post-content.component.html',
  styleUrls: ['./page-post-content.component.scss'],
})
export class PagePostContentComponent implements OnInit {

  @Input() post: Post;
  constructor(
    public a: AppService
  ) { }

  ngOnInit() {}

}
