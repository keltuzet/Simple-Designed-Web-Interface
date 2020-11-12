import { BuiltInValidatorErrors, CustomValidatorErrors } from '@shared/enums';
import { ValidatorErrorOptionModel } from '@shared/models';

export const ValidatorsErrorMessages = {
  [BuiltInValidatorErrors.Required](invalid: boolean): string {
    return 'This field is required!';
  },
  [BuiltInValidatorErrors.Email](invalid: boolean): string {
    return 'Invalid email address!';
  },
  [CustomValidatorErrors.Email](option: ValidatorErrorOptionModel): string {
    return 'Invalid email address!';
  },
  [CustomValidatorErrors.ForbiddenWords](
    option: ValidatorErrorOptionModel
  ): string {
    const words = option?.forbiddenWords.map((word) => `"${word}"`).join(', ');
    return `The words: ${words} are forbidden!`;
  },
  [CustomValidatorErrors.PersonName](
    option: ValidatorErrorOptionModel
  ): string {
    return option.isMiddleNameRequired
      ? 'Write your first name, last name, middle name!'
      : 'write your first name, last name!';
  },
  [CustomValidatorErrors.MinDate](
    option: ValidatorErrorOptionModel
  ): string {
    return `The date must be less than ${option.minDate || 'current'}current!`;
  },
};
