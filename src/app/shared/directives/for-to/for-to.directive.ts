import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appForTo]',
})
export class ForToDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appForTo(count: number) {
    if (count < 0) {
      throw Error('The number of items to create must be greater than zero');
      return;
    }

    this.viewContainer.clear();
    for (let i = 1; i <= count; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: i,
      });
    }
  }
}
