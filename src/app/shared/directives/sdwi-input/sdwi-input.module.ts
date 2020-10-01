import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdwiInputDirective } from './sdwi-input.directive';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SdwiInputDirective],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SdwiInputDirective],
})
export class SdwiInputModule {}
