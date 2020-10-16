import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { FormControlDirective, NgControl } from '@angular/forms';
import { ExtendedFormControl } from '@shared/models';
import { FieldErrorLabelComponent } from '../field-error-label';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent implements AfterContentInit {
  control: ExtendedFormControl;

  @ContentChild(FieldErrorLabelComponent)
  private errorComponent: FieldErrorLabelComponent;

  @ContentChild('controlAnchor', { read: NgControl })
  private ngControl: NgControl | FormControlDirective;

  ngAfterContentInit(): void {
    if (!this.ngControl) {
      throw new Error(
        `Create template reference variable with the name "controlAnchor" and with the reference to your control!`
      );
    } else {
      this.control = this.ngControl.control as ExtendedFormControl;
    }
    if (this.errorComponent) {
      this.control.statusChanges.subscribe(() => {
        this.errorComponent.errorText = this.control.errorMessage;
      });
    }
  }
}
