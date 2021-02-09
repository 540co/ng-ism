import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BannerLineComponent } from './banner-line.component';

@NgModule({
  declarations: [BannerLineComponent],
  imports: [CommonModule],
  exports: [BannerLineComponent],
})
export class BannerLineModule {}
