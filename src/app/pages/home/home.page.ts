import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  img="https://static1.squarespace.com/static/571fb0c760b5e9a0a98cc71c/5c3cf3b9758d4640ed8e42f1/5c3cf47a1ae6cfa74d78926d/1549515177784/Santa-Barbara-Hotel-Photography-Mark-Skovorodko0003.jpg";
  status: boolean;

  
  constructor() {}

  imgload() {
    console.log('asda');
  }


}
