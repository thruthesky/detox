import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinMenuComponent } from './join-menu.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [JoinMenuComponent],
  exports: [JoinMenuComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class JoinMenuModule { }
