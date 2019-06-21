import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-mobile-home-testimonial',
  templateUrl: './mobile-home-testimonial.component.html',
  styleUrls: ['./mobile-home-testimonial.component.scss'],
})
export class MobileHomeTestimonialComponent implements OnInit {

  constructor(
    public a: AppService
  ) { }

  ngOnInit() {}

}
