import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { IconModel } from '@shared/models';

@Component({
  selector: 'app-sdwi-numeric-input',
  templateUrl: './sdwi-numeric-input.component.html',
  styleUrls: ['./sdwi-numeric-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SdwiNumericInputComponent),
      multi: true,
    },
  ],
})
export class SdwiNumericInputComponent implements ControlValueAccessor {
  @Input() set Value(val: number) {
    this.value = val;
  }
  get Value(): number {
    return this.value;
  }
  @Input() min: number;
  @Input() max: number;

  icons: IconModel = {
    arrowUp: faCaretUp,
    arrowDown: faCaretDown,
  };
  disabled = false;
  value = null;
  private onChange = (value: any) => {};
  private onTouched = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  writeValue(outsideValue: number): void {
    this.value = outsideValue;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // handleIncrease(event: Event): void {
  //   this.control.setValue(this.control.value + 1);
  //   event.preventDefault();
  // }

  // handleDecrease(event: Event): void {
  //   this.control.setValue(this.control.value - 1);
  //   event.preventDefault();
  // }

  updateValue(insideValue: number): void {
    this.value = insideValue;
    this.onChange(insideValue);
    this.onTouched();
  }
}
