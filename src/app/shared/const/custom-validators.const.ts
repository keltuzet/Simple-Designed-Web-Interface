import { DatePipe } from '@angular/common';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { CustomValidatorErrors } from '@shared/enums';
import { ValidatorErrorOptionModel } from '@shared/models';
import { isString, isDate } from 'lodash';

export interface CustomValidatorModel {
  email: ValidatorFn;
  forbiddenWords: (words: string[]) => ValidatorFn;
  personName: (isMiddleNameRequired?: boolean) => ValidatorFn;
  minDate: (date: string | Date) => ValidatorFn;
}

export const CustomValidator: CustomValidatorModel = {
  get email(): ValidatorFn {
    const emailRegExp = /^[\w\d\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+(\.[\w\d\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+)*\@([a-zA-Z\d]+(\-+[a-zA-Z\d]+)*)(\.([a-zA-Z\d]+(\-+[a-zA-Z\d]+)*))*$/;
    return (
      control: AbstractControl
    ): { [key: string]: ValidatorErrorOptionModel } | null => {
      return !control.value || emailRegExp.test(control.value)
        ? null
        : { [CustomValidatorErrors.Email]: { control } };
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
            [CustomValidatorErrors.ForbiddenWords]: {
              control,
              forbiddenWords: words,
            },
          };
    };
  },
  personName(isMiddleNameRequired?: boolean): ValidatorFn {
    const nameRegExp = isMiddleNameRequired
      ? /^[a-zа-я]+( |,|, )[a-zа-я]+\1[a-zа-я]+\s*$/i
      : /^[a-zа-я]+( |,|, )[a-zа-я]+(\1[a-zа-я]+)?\s*$/i;
    return (
      control: AbstractControl
    ): { [key: string]: ValidatorErrorOptionModel } | null => {
      return !control.value || nameRegExp.test(control.value)
        ? null
        : {
            [CustomValidatorErrors.PersonName]: {
              control,
              isMiddleNameRequired,
            },
          };
    };
  },
  minDate(minDate?: Date): ValidatorFn {
    return (
      control: AbstractControl
    ): { [key: string]: ValidatorErrorOptionModel } | null => {
      if (!control.value) {
        return null;
      }
      const dateValue: Date = isString(control.value)
        ? new Date(control.value)
        : control.value;
      return dateValue.valueOf() <= (minDate?.valueOf() || Date.now().valueOf())
        ? null
        : {
            [CustomValidatorErrors.MinDate]: {
              control,
              minDate: minDate.toString(),
            },
          };
    };
  },
};
