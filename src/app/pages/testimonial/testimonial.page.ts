import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.page.html',
  styleUrls: ['./testimonial.page.scss'],
})
export class TestimonialPage implements OnInit {

  constructor(public a: AppService) { }

  ngOnInit() {
  }

}
