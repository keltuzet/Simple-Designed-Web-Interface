import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';
import { CustomValidatorErrors } from '@shared/enums';
import { ValidatorErrorOptionModel } from '@shared/models';

export interface CustomValidatorModel {
  email: ValidatorFn;
  forbiddenWords: (words: string[]) => ValidatorFn;
}

export const CustomValidator: CustomValidatorModel = {
  get email(): ValidatorFn {
    const emailRegExp = /^[\w\d\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+(\.[\w\d\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+)*\@([a-zA-Z\d]+(\-+[a-zA-Z\d]+)*)(\.([a-zA-Z\d]+(\-+[a-zA-Z\d]+)*))*$/;
    return (
      control: AbstractControl
    ): { [key: string]: ValidatorErrorOptionModel } | null => {
      return !control.value || emailRegExp.test(control.value)
        ? null
        : { [CustomValidatorErrors.EMAIL]: { value: control.value, control } };
    };
  },
  forbiddenWords(words: string[]): ValidatorFn {
    return (
      control: AbstractControl
    ): { [key: string]: ValidatorErrorOptionModel } | null => {
      const foundWords = words.filter((word) =>
        control.value.toLowerCase().includes(word.toLocaleLowerCase())
      );
      return !control.value || !foundWords.length
        ? null
        : {
            [CustomValidatorErrors.FORBIDDEN_WORDS]: {
              control,
              forbiddenWords: words,
            },
          };
    };
  },
};
