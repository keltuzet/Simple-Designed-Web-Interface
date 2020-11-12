import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { isString, isNumber, isNaN, isDate } from 'lodash';
import { DATE_MASK, DATE_TIME_MASK } from '@shared/const';

type DateInputValueType = Date | string | number;
enum DateInputValueEnum {
  Date = 'date',
  Moment = 'moment',
  String = 'string',
  Number = 'number',
}

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true,
    },
  ],
})
export class DateInputComponent implements ControlValueAccessor {
  @Input() public dateTime = false;
  @Input() public disabled = false;
  @Input() public placeholder = '';
  @Input() public dateType: DateInputValueEnum;
  @Input() private toUtc = false;

  public UIvalue = null;
  public dateMask = DATE_MASK;
  public dateTimeMask = DATE_TIME_MASK;
  private _value: DateInputValueType = null;

  public set value(vl: DateInputValueType) {
    this.onChange(vl);
    this._value = vl;
  }
  public get value(): DateInputValueType {
    return this._value;
  }

  private onChange(value: any): void {}

  private onTouched(): void {}

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  public writeValue(outsideValue: DateInputValueType): void {
    let UIvalue: string;
    let day: number | string;
    let month: number | string;
    let year: number | string;
    let hour: number | string;
    let minute: number | string;

    if (
      this.dateType === DateInputValueEnum.Date || isDate(outsideValue)
    ) {
      if (isDate(outsideValue)) {
        outsideValue = new Date(outsideValue);
      }
      day = this.formatDateProperties((outsideValue as Date).getDate());
      month = this.formatDateProperties((outsideValue as Date).getMonth() + 1);
      year = (outsideValue as Date).getFullYear();
      hour = this.formatDateProperties((outsideValue as Date).getHours());
      minute = this.formatDateProperties((outsideValue as Date).getMinutes());
      this.dateType = DateInputValueEnum.Date;
      UIvalue = `${day}/${month}/${year} ${hour}:${minute}`;
    } else {
      if (
        isString(outsideValue) ||
        (isNumber(outsideValue) && !isNaN(outsideValue))
      ) {
        const date = new Date(outsideValue);
        day = this.formatDateProperties(date.getDate());
        month = this.formatDateProperties(date.getMonth() + 1);
        year = date.getFullYear();
        hour = this.formatDateProperties(date.getHours());
        minute = this.formatDateProperties(date.getMinutes());
        if (isString(outsideValue)) {
          this.dateType = DateInputValueEnum.String;
        } else {
          this.dateType = DateInputValueEnum.Number;
        }
        UIvalue = `${date}/${month}/${year} ${hour}:${minute}`;
      } else {
        return;
      }
    }

    this._value = outsideValue;
    this.UIvalue = UIvalue;
  }

  public handleUpdateValue(value: string): void {
    let day: number;
    let month: number;
    let year: number;
    let hour: number;
    let minute: number;
    let date: Date;

    if (this.dateTime) {
      [day, month, year] = value
        .slice(0, -5)
        .split('/')
        .map((vl) => +vl);
      [hour, minute] = value
        .slice(-5)
        .split(':')
        .map((vl) => +vl);
      date = new Date(year, month, day, hour, minute);
    } else {
      [day, month, year] = value.split('/').map((vl) => +vl);
      date = new Date(year, month, day);
    }

    if (isNaN(date.getTime())) {
      this.value = null;
      return;
    }

    switch (this.dateType) {
      case 'number':
        this.value = date.getTime();
        break;
      case 'string':
        this.value = this.toUtc ? date.toUTCString() : date.toString();
        break;
      case 'date':
      default:
        this.value = date;
        break;
    }
  }

  public hanldeBlurInp(): void {
    this.onTouched();
  }

  private formatDateProperties(prop: string | number): string | number {
    return +prop < 10 ? `0${prop}` : prop;
  }

  private checkTypeEquality(comparisonType: DateInputValueEnum): boolean {
    return this.dateType ? this.dateType === comparisonType : true;
  }
}
