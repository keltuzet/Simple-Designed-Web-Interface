import {
  Directive,
  ElementRef,
  Optional,
  ViewContainerRef,
} from '@angular/core';
import { AbstractControl, FormControlName, NgControl, NgModel } from '@angular/forms';

// class ExtendedNgControl extends NgControl {
//   viewToModelUpdate(newValue: any): void {
//     throw new Error('Method not implemented.');
//   }
//   get control(): AbstractControl {
//     throw new Error('Method not implemented.');
//   }
// }

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[ngModel], [formControl], [formControlName]',
})
export class SdwiInputDirective {
  constructor(
    private elementRef: ElementRef,
    // private viewContainer: ViewContainerRef,
    public control: FormControlName,
    @Optional() private model: NgModel
  ) {
    // if (!!model) {
    //   (model.control as any).nativeElement = elementRef.nativeElement;
    // } else {
    //   (control as any).nativeElement = elementRef.nativeElement;
    // }
  }
}
