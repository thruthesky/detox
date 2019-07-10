import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPromiseComponent } from './my-promise.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ MyPromiseComponent ],
  exports: [ MyPromiseComponent ],
  entryComponents: [ MyPromiseComponent ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class MyPromiseModule { }


