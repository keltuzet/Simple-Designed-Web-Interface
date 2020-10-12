import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appForbiddenValidator]',
})
export class ForbiddenValidatorDirective {
  // @Input('forbiddenWords') forbiddenWords: string[];

  constructor() {}
}
