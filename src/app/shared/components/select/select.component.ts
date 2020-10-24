import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subject, Subscription } from 'rxjs';
import { isNil } from 'lodash';

import { OptionComponent } from './components';
import { OptionModel } from './models';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
  animations: [
    trigger('collapse', [
      state('void', style({ transform: 'translateY(-100%)' })),
      transition('void => *', [
        animate(100, style({ transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class SelectComponent
  implements ControlValueAccessor, OnInit, AfterViewInit {
  public isPanelDisplay: boolean;
  public viewValue = '';
  public icon = faCaretDown;
  public isPanelShow$: Observable<boolean>;
  public actualPanelWidth: string;
  private isOptionValuesReady$: Subject<void> = new Subject<void>();
  private _value: any;
  private optionValues: any[] = [];
  private $subscriptions: Subscription[] = [];

  @ViewChild(CdkConnectedOverlay, { static: true })
  private connectedOverlay: CdkConnectedOverlay;
  @ViewChild('trigger', { read: ElementRef })
  private selectRef: ElementRef<HTMLDivElement>;
  @ContentChildren(OptionComponent) private options: QueryList<OptionComponent>;

  @Input() panelWidth: string;
  @Input() onHover: boolean;
  @Input() set value(val: any) {
    this.writeValue(val);
  }
  get value(): any {
    return this._value;
  }

  @Output() private valueChange = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    this.connectedOverlay.backdropClick.subscribe(() => {
      this.isPanelDisplay = false;
    });
  }

  ngAfterViewInit(): void {
    this.options.forEach((option) => {
      if (option.value !== undefined) {
        this.optionValues.push(option.value);
      }
      this.$subscriptions.push(
        option.valueChange.subscribe((optionValue: OptionModel) => {
          if (!isNil(optionValue)) {
            this._value = optionValue.value;
            this.viewValue = optionValue.viewValue;
            this.evaluateWidth();
            this.valueChange.emit(this.value);
          }
          this.isPanelDisplay = false;
        })
      );
    });
    this.evaluateWidth();
    this.isOptionValuesReady$.next();
  }

  evaluateWidth(): void {
    setTimeout(() => {
      this.actualPanelWidth =
        this.panelWidth !== undefined
          ? this.panelWidth
          : `${
              parseFloat(
                getComputedStyle(this.selectRef?.nativeElement)?.width
              ) || 200
            }px`;
    });
  }

  handleTogglePanelDisplay(): void {
    this.isPanelDisplay = !this.isPanelDisplay;
  }

  handleOpenPanel(event: MouseEvent): void {}

  handleClosePanel(event: MouseEvent): void {}

  private onChange(value: any): void {}

  private onTouched(): void {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  writeValue(outsideValue: any): void {
    if (this.options?.length) {
      setTimeout(() => {
        this.options.forEach((option) => {
          if (option.value === outsideValue) {
            this._value = outsideValue;
            this.viewValue = option.viewValue;
            this.evaluateWidth();
          }
        });
      });
    } else {
      this.isOptionValuesReady$.subscribe(() => {
        this.writeValue(outsideValue);
      });
    }
  }
}
