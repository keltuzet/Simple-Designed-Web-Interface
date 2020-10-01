import { Directive, ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';

@Directive({
  selector: '[ngModel], [formControl], [formControlName]',
})
export class SdwiInputDirective {
  constructor(
    private elementRef: ElementRef,
    private viewContainer: ViewContainerRef,
    private control : NgControl
  ) {
    console.log(this.elementRef);
    console.log(this.viewContainer);
    console.log(this.control);
  }
}
