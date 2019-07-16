import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPromiseComponent } from './my-promise.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ MyPromiseComponent ],
  exports: [ MyPromiseComponent ],
  entryComponents: [ MyPromiseComponent ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class MyPromiseModule { }


