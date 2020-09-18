import {
  Directive,
  ElementRef,
  Renderer2,
  Input,
  AfterViewInit,
} from '@angular/core';

@Directive({
  selector: '[appSelectTablePadding]',
})
export class SelectTablePaddingDirective implements AfterViewInit {
  tds: HTMLCollectionOf<HTMLTableCellElement>;
  ths: HTMLCollectionOf<HTMLTableCellElement>;
  isViewInit = false;
  PaddingX: number;
  PaddingY: number;

  @Input() includeTh = false;
  @Input() set paddingX(val: number) {
    this.PaddingX = val;
    if (this.isViewInit) {
      this.setPaddingX();
    }
  }
  @Input() set paddingY(val: number) {
    this.PaddingY = val;
    if (this.isViewInit) {
      this.setPaddingY();
    }
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.tds = this.elementRef.nativeElement.getElementsByTagName('td');
    this.ths = this.elementRef.nativeElement.getElementsByTagName('th');
    this.setPaddingX();
    this.setPaddingY();
    this.isViewInit = true;
  }

  setPaddingX() {
    Array.from(this.tds)?.forEach((el) => {
      this.renderer.setStyle(el, 'padding-left', `${this.PaddingX}px`);
      this.renderer.setStyle(el, 'padding-right', `${this.PaddingX}px`);
    });
    if (this.includeTh) {
      Array.from(this.ths)?.forEach((el) => {
        this.renderer.setStyle(el, 'padding-left', `${this.PaddingX}px`);
        this.renderer.setStyle(el, 'padding-right', `${this.PaddingX}px`);
      });
    }
  }

  setPaddingY() {
    Array.from(this.tds)?.forEach((el) => {
      this.renderer.setStyle(el, 'padding-top', `${this.PaddingY}px`);
      this.renderer.setStyle(el, 'padding-bottom', `${this.PaddingY}px`);
    });
    if (this.includeTh) {
      Array.from(this.ths)?.forEach((el) => {
        this.renderer.setStyle(el, 'padding-top', `${this.PaddingY}px`);
        this.renderer.setStyle(el, 'padding-bottom', `${this.PaddingY}px`);
      });
    }
  }
}
