import { ValidationErrors } from '@angular/forms';
import { ValidatorsErrorMessages } from '@shared/const';

export function validatorErrorHandler(err: ValidationErrors): string {
  const key = Object.keys(err)[0];
  return ValidatorsErrorMessages[key] && ValidatorsErrorMessages[key](err[key]);
}
