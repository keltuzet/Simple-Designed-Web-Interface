import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appDataBindVisibility]',
})
export class DataBindVisibilityDirective {
  @Input() set data(value: boolean | string | number | null | undefined) {
    if (value === null || value === undefined || value === '') {
      this.makeInVisible();
    } else {
      this.makeVisible();
    }
  }

  constructor(private elementRef: ElementRef) {}

  makeVisible() {
    this.elementRef.nativeElement.style.visibility = 'visible';
  }

  makeInVisible() {
    this.elementRef.nativeElement.style.visibility = 'hidden';
  }
}
