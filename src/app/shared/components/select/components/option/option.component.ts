import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { OptionModel } from '../../models';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss'],
})
export class OptionComponent implements OnInit {
  private _viewValue: string;

  @Input() public value: any;
  @Input() public set viewValue(val: string) {
    this._viewValue = val;
  }
  public get viewValue(): string {
    return this._viewValue || this.elRef.nativeElement.textContent;
  }
  @Output() public valueChange: EventEmitter<OptionModel> = new EventEmitter<
    OptionModel
  >();

  @ViewChild('wrap', { read: ElementRef }) private elRef: ElementRef<
    HTMLElement
  >;

  @HostListener('click')
  handleClick(): void {
    if (this.value !== undefined) {
      this.valueChange.emit({
        value: this.value,
        viewValue: this.viewValue,
      });
    } else {
      this.valueChange.emit(undefined);
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
