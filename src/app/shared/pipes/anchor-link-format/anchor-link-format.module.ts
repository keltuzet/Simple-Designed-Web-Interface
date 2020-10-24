import { NgModule } from '@angular/core';
import { AnchorLinkFormatPipe } from './anchor-link-format.pipe';

@NgModule({
  declarations: [AnchorLinkFormatPipe],
  exports: [AnchorLinkFormatPipe],
})
export class AnchorLinkFormatModule {}
