import { NgModule } from '@angular/core';
import { BannerLineModule } from './banner-line/banner-line.module';
import { ImageModule } from './image/image.module';
import { PortionMarkingModule } from './portion-marking/portion-marking.module';

const MODULES = [BannerLineModule, ImageModule, PortionMarkingModule];

@NgModule({
  declarations: [],
  imports: [...MODULES],
  exports: [...MODULES],
})
export class NgIsmModule {}
