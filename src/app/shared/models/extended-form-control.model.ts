import {
  FormControl,
  ValidatorFn,
  AbstractControlOptions,
  AsyncValidatorFn,
} from '@angular/forms';
import { validatorErrorHandler } from '@shared/common';
import { merge, Observable, Subject, Subscription } from 'rxjs';

export class ExtendedFormControl extends FormControl {
  errorMessage: string;
  touchedChanges: Subject<void> = new Subject<void>();
  validityChange: Observable<void>;

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
    this.validityChange = merge(this.statusChanges);
    this.statusChanges.subscribe((status) => {
      if (this.invalid) {
        this.errorMessage = validatorErrorHandler(this.errors);
      } else {
        this.errorMessage = '';
      }
    });
  }

  markAsTouched(): void {
    this.updateValueAndValidity();
    this.touchedChanges.next();
  }
}
