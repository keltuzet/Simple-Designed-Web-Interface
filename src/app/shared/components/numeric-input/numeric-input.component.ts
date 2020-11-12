import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { isUndefined } from 'lodash';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { IconModel } from '@shared/models';

@Component({
  selector: 'app-numeric-input',
  templateUrl: './numeric-input.component.html',
  styleUrls: ['./numeric-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumericInputComponent),
      multi: true,
    },
  ],
})
export class NumericInputComponent implements ControlValueAccessor {
  @Input() min: number;
  @Input() max: number;
  @Input() set placeholder(placeholder: string) {
    this.placholderValue = placeholder;
  }
  get placeholder(): string {
    return isUndefined(this.placholderValue) ? '' : this.placholderValue;
  }
  private placholderValue: string;
  private fromUI: boolean;
  public icons: IconModel = {
    arrowUp: faCaretUp,
    arrowDown: faCaretDown,
  };
  public disabled = false;
  public value = null;
  public focused: boolean;
  private onChange = (value: any) => {};
  private onTouched = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  writeValue(outsideValue: number): void {
    const isValid = this.checkRange(outsideValue);
    if (this.fromUI) {
      if (isValid) {
        this.value = outsideValue;
      } else {
        const buffer = this.value === null ? '' : this.value;
        this.value = null;
        setTimeout(() => {
          this.value = buffer;
        });
      }
    } else {
      if (isValid) {
        this.value = outsideValue;
      }
    }
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  handleUpdateValue(insideValue: number): void {
    this.fromUI = true;
    this.writeValue(insideValue);
    this.onChange(insideValue);
    this.onTouched();
    this.fromUI = null;
  }

  checkRange(value: number): boolean {
    return (
      value === null ||
      ((isUndefined(this.max) ? true : value <= this.max) &&
        (isUndefined(this.min) ? true : value >= this.min))
    );
  }

  handleInputFocus(event): void {
    console.log(event);
    this.focused = true;
  }

  handleInputBlur(): void {
    this.focused = false;
  }
}
