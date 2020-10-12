import {
  FormControl,
  ValidatorFn,
  AbstractControlOptions,
  AsyncValidatorFn,
} from '@angular/forms';
import { validatorErrorHandler } from '@shared/common';
import { Observable } from 'rxjs';

export class ExtendedFormControl extends FormControl {
  errorMessage: string;

  constructor(
    formState?: any,
    validatorOrOpts?:
      | ValidatorFn
      | ValidatorFn[]
      | AbstractControlOptions
      | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ) {
    super(formState, validatorOrOpts, asyncValidator);
    this.statusChanges.subscribe((status) => {
      if (this.invalid) {
        this.errorMessage = validatorErrorHandler(this.errors);
      } else {
        this.errorMessage = '';
      }
    });
  }
}
