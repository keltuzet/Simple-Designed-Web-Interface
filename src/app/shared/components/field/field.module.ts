import { NgModule } from '@angular/core';
import {
  FieldErrorLabelComponent,
  FieldLabelComponent,
  FormFieldComponent,
} from './components';

@NgModule({
  declarations: [
    FormFieldComponent,
    FieldErrorLabelComponent,
    FieldLabelComponent,
  ],
  exports: [FormFieldComponent, FieldErrorLabelComponent, FieldLabelComponent],
})
export class FieldModule {}
