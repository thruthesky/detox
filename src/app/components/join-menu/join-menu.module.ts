import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinMenuComponent } from './join-menu.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [JoinMenuComponent],
  exports: [JoinMenuComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class JoinMenuModule { }
