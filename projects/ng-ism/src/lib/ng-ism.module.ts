import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIsmComponent } from './ng-ism.component';



@NgModule({
  declarations: [NgIsmComponent],
  imports: [
    BrowserModule
  ],
  exports: [NgIsmComponent]
})
export class NgIsmModule { }
