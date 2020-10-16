import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationsComponent } from './animations.component';
import { CustomListGroupComponent } from './components';
import { ViewerModule } from '@shared/components';
import { SharedModule } from '@shared/modules';

@NgModule({
  declarations: [AnimationsComponent, CustomListGroupComponent],
  imports: [CommonModule, ViewerModule, SharedModule],
})
export class AnimationsModule {}
