import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdwiInputDirective } from './sdwi-input.directive';

@NgModule({
  declarations: [SdwiInputDirective],
  imports: [CommonModule],
  exports: [SdwiInputDirective],
})
export class SdwiInputModule {}
