import {
  Directive,
  ElementRef,
  Renderer2,
  Input,
  AfterViewInit,
  HostListener,
} from '@angular/core';
import { ScrollRangeModel } from './scroll-range.model';

@Directive({
  selector: '[appScrollShadow]',
})
export class ScrollShadowDirective implements AfterViewInit {
  @Input() set scrollRowStartIndex(startIndex: number) {
    this.scrollRows.startIndex = startIndex;
  }
  @Input() set scrollRowEndIndex(endIndex: number) {
    this.scrollRows.endIndex = endIndex;
  }
  @Input() set scrollColumnStartIndex(startIndex: number) {
    this.scrollColumn.startIndex = startIndex;
  }
  get scrollColumnStartIndex(): number {
    return this.scrollColumn.startIndex;
  }
  @Input() set scrollColumnEndIndex(endIndex: number) {
    this.scrollColumn.endIndex = endIndex;
  }
  get scrollColumnEndIndex(): number {
    return this.scrollColumn.endIndex;
  }

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}
  scrollRows: ScrollRangeModel = new ScrollRangeModel();
  scrollColumn: ScrollRangeModel = new ScrollRangeModel();
  rows: NodeListOf<HTMLElement>; //  HTMLTableCellElement[]
  columns: NodeListOf<HTMLElement>;
  wrapper: HTMLElement;

  @HostListener('scroll', ['$event']) onScroll(event) {
    const table: HTMLTableElement = event.target;
    const color = 'rgba(0, 0, 0, 0.2)';
    const leftShadowX: number = Math.floor(table.scrollLeft / 7);
    if (table.scrollLeft < 35) {
      this.getColumn(this.scrollColumnStartIndex).forEach(
        (el) =>
          (el.style.boxShadow = `${leftShadowX}px 0 ${leftShadowX}px -0.5px ${color}`)
      );
    }
  }

  ngAfterViewInit() {
    this.wrapper = this.elementRef.nativeElement;
    this.generateSequence().next();

    if (this.scrollColumnStartIndex) {
      for (let i = 1; i <= this.scrollColumnStartIndex; i++) {
        const columnCells = this.getColumn(i);
        // columnCells.forEach((cell, index) => {
        //   const left = cell.previousElementSibling
        //     ? getComputedStyle(cell.previousElementSibling).width
        //     : 0;
        //   this.renderer2.setStyle(cell, 'position', 'sticky');
        //   this.renderer2.setStyle(cell, 'z-index', '100');
        //   this.renderer2.setStyle(cell, 'left', left);
        // });
      }
    }
    // if (this.scrollColumns) {
    //   this.columns = this.wrapper.querySelectorAll(
    //     this.scrollRows
    //       .map((item) => `tr:nth-child(${item}) td, tr:nth-child(${item}) th`)
    //       .join(',')
    //   );
    // }

    // this.rows.forEach((row) => {
    //   this.renderer2.setStyle(row, 'position', 'sticky');
    //   const left = `${
    //     parseFloat(getComputedStyle(row).width) +
    //     parseFloat(getComputedStyle(row).paddingLeft) +
    //     parseFloat(getComputedStyle(row).paddingRight)
    //   }px`;
    //   console.log(parseFloat(getComputedStyle(row).width));
    //   this.renderer2.setStyle(row, 'left', left);
    //   this.renderer2.setStyle(row, 'z-index', '100');
    // });
  }

  getWidthOfAllPreviousElements(element: Element) {
    return element.previousElementSibling
      ? parseFloat(getComputedStyle(element).width) +
          this.getWidthOfAllPreviousElements(element.previousElementSibling)
      : parseFloat(getComputedStyle(element).width);
  }

  getColumn(index): NodeListOf<HTMLElement> {
    return this.wrapper.querySelectorAll(
      `tr td:nth-child(${index}), tr th:nth-child(${index})`
    );
  }

  getColumns(index) {
    let columns = [];
    for (let i = 1; i <= index; i++) {
      columns[i] = this.wrapper.querySelectorAll(
        `tr td:nth-child(${index}), tr th:nth-child(${index})`
      );
    }
    return columns;
  }

  *f() {
    for (let i = 1; i <= 3; i++) {
      yield i;
    }
  }

  *generateSequence() {
    yield 1;
    yield 2;
    return 3;
  }

  getRow(index): NodeListOf<HTMLElement> {
    return this.wrapper.querySelectorAll(
      `tr:nth-child(${index}) td, tr:nth-child(${index}) th`
    );
  }
}
