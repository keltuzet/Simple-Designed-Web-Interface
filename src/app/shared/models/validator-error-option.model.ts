import { AbstractControl } from '@angular/forms';

export interface ValidatorErrorOptionModel {
  control: AbstractControl;
  [key: string]: any;
}
