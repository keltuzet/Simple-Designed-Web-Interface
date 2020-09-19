import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerWrapperComponent } from './spinner-wrapper.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [SpinnerWrapperComponent],
  imports: [NgxSpinnerModule],
  exports: [SpinnerWrapperComponent],
})
export class SpinnerWrapperModule {}
