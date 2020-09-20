import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdwiErrorModule } from '../sdwi-error';
import { SdwiLabelModule } from '../sdwi-label';
import { SdwiFormFieldComponent } from './sdwi-form-field.component';

@NgModule({
  declarations: [SdwiFormFieldComponent],
  imports: [ReactiveFormsModule, FormsModule, SdwiLabelModule, SdwiErrorModule],
  exports: [SdwiFormFieldComponent],
})
export class SdwiFormFieldModule {}
