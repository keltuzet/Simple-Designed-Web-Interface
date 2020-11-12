import { Validators } from '@angular/forms';
import { ExtendedFormGroup, ExtendedFormControl } from '@shared/models';

export const CLIENT_EDIT_FORM = new ExtendedFormGroup({
  fullName: new ExtendedFormControl(null, Validators.required),
  DOB: new ExtendedFormControl(null, Validators.required),
  email: new ExtendedFormControl(null, [Validators.required, Validators.email]),
  phoneNumber: new ExtendedFormControl(null, Validators.required),
  lastSeenDate: new ExtendedFormControl(null, Validators.required),
  lastTransactionDate: new ExtendedFormControl(null, Validators.required),
  account: new ExtendedFormControl(null, [
    Validators.required,
    Validators.min(0),
  ]),
  status: new ExtendedFormControl(null, Validators.required),
});
