import { NgModule } from '@angular/core';
import { ForbiddenValidatorDirective } from './forbidden-validator.directive';
import { NG_VALIDATORS } from '@angular/forms';

@NgModule({
  declarations: [ForbiddenValidatorDirective],
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ForbiddenValidatorDirective,
      multi: true,
    },
  ],
})
export class ForbiddenValidatorModule {}
