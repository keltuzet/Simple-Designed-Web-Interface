import { BuiltInValidatorErrors, CustomValidatorErrors } from '@shared/enums';
import { ValidatorErrorOptionModel } from '@shared/models';

export const ValidatorsErrorMessages = {
  [BuiltInValidatorErrors.REQUIRED](invalid: boolean): string {
    return 'This field is required!';
  },
  [BuiltInValidatorErrors.EMAIL](invalid: boolean): string {
    return 'Invalid email address!';
  },
  [CustomValidatorErrors.EMAIL](option: ValidatorErrorOptionModel): string {
    return 'Invalid email address!';
  },
  [CustomValidatorErrors.FORBIDDEN_WORDS](
    option: ValidatorErrorOptionModel
  ): string {
    const words = option?.forbiddenWords.map((word) => `"${word}"`).join(', ');
    return `The words: ${words} are forbidden!`;
  },
  [CustomValidatorErrors.PERSON_NAME](
    option: ValidatorErrorOptionModel
  ): string {
    return option.isMiddleNameRequired
      ? 'Write your first name, last name, middle name'
      : 'write your first name, last name';
  },
};
