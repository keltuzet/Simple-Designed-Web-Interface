import { Validators } from '@angular/forms';
import { CustomValidator } from '@shared/const';
import { ExtendedFormGroup, ExtendedFormControl } from '@shared/models';

export const CLIENT_CREATE_FROM = new ExtendedFormGroup({
  fullName: new ExtendedFormControl(null, [Validators.required, CustomValidator.personName()]),
  DOB: new ExtendedFormControl(null, Validators.required),
  email: new ExtendedFormControl(null, [Validators.required, Validators.email]),
  phoneNumber: new ExtendedFormControl(null, Validators.required),
  lastSeenDate: new ExtendedFormControl(null, Validators.required),
  lastTransactionDate: new ExtendedFormControl(null, Validators.required),
  account: new ExtendedFormControl(null, [Validators.required, Validators.min(0)]),
  status: new ExtendedFormControl(null, Validators.required),
});
