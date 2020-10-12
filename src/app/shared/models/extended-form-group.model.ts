import {
  FormGroup,
  ValidatorFn,
  AbstractControlOptions,
  AsyncValidatorFn,
} from '@angular/forms';
import { ExtendedFormControl } from '.';

export class ExtendedFormGroup extends FormGroup {
  controls: {
    [key: string]: ExtendedFormControl;
  };

  constructor(
    controls: {
      [key: string]: ExtendedFormControl;
    },
    validatorOrOpts?:
      | ValidatorFn
      | ValidatorFn[]
      | AbstractControlOptions
      | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ) {
    super(controls, validatorOrOpts, asyncValidator);
  }
}
