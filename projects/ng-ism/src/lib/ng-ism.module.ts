import { NgModule } from '@angular/core';
import { BannerLineModule } from './banner-line/banner-line.module';
import { PortionMarkingModule } from './portion-marking/portion-marking.module';
import { ImageModule } from './image/image.module';

@NgModule({
  declarations: [],
  imports: [BannerLineModule, PortionMarkingModule, ImageModule],
  exports: [BannerLineModule, PortionMarkingModule, ImageModule],
})
export class NgIsmModule {}
