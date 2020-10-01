import { Directive, ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSdwiInput]',
})
export class SdwiInputDirective {
  constructor(
    private elementRef: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    console.log(this.templateRef);
    console.log(this.viewContainer);
  }
}
