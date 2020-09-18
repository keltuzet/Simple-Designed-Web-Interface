import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sdwi-numeric-input',
  templateUrl: './sdwi-numeric-input.component.html',
  styleUrls: ['./sdwi-numeric-input.component.scss'],
})
export class SdwiNumericInputComponent {
  @Input() control: FormControl;
  @Input() placholder: string;
  @Input() min: number;
  @Input() max: number;
  icons = {
    arrowUp: faCaretUp,
    arrowDown: faCaretDown,
  };

  handleIncrease(event: Event): void {
    this.control.setValue(this.control.value + 1);
    event.preventDefault();
  }

  handleDecrease(event: Event): void {
    this.control.setValue(this.control.value - 1);
    event.preventDefault();
  }
}
