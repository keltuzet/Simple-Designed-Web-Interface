import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faFilter, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { CustomInputTypeEnum } from '../../../../shared/enums';

@Component({
  selector: 'app-table-filter-item',
  templateUrl: './table-filter-item.component.html',
  styleUrls: ['./table-filter-item.component.scss'],
})
export class TableFilterItemComponent {
  @Input() type: CustomInputTypeEnum;
  @Output() valueChangeEvent = new EventEmitter<any>();
  CustomInputTypes = CustomInputTypeEnum;
  formControl = new FormControl();
  icons = { clear: faWindowClose, filter: faFilter };

  constructor() {
    this.formControl.valueChanges.subscribe((value) => {
      console.log(value);
      this.valueChangeEvent.emit(value)
    });
  }

  handleChangeValue(value): void {
    this.valueChangeEvent.emit(value);
  }
}
