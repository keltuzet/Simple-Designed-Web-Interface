import { NgModule } from '@angular/core';
import { ViewerComponent } from './viewer.component';
import { SharedModule } from '../../modules';

@NgModule({
  declarations: [ViewerComponent],
  imports: [SharedModule],
  exports: [ViewerComponent],
})
export class ViewerModule {}
