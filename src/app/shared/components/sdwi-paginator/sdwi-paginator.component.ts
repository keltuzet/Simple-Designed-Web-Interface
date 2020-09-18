import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PAGINATOR_ICONS } from './paginator-icons.const';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-paginator',
  templateUrl: './sdwi-paginator.component.html',
  styleUrls: ['./sdwi-paginator.component.scss'],
})
export class SdwiPaginatorComponent implements OnInit {
  currentPageSize = 1;
  from: number;
  to: number;
  current: number;
  control = new FormControl('');
  icons = PAGINATOR_ICONS;

  @Output() CurrentChange: EventEmitter<number> = new EventEmitter<number>();

  @Input() default = true;
  @Input() showNavigationButtons = true;
  @Input() showPaginatorInfo = false;
  @Input() showPageSizeOptions = false;
  @Input() pageCount: number;
  @Input() pageSizeOptions: number[] = [2, 5, 10, 20];
  @Input() set Current(val: number) {
    if (val <= this.pageCount && val > 0) {
      this.current = val;
      this.CurrentChange.emit(this.Current);
      if (this.current > this.to || this.current < (this.from + 1)) {
        this.initializeRange();
      }
    }
  }
  get Current(): number {
    return this.current;
  }

  constructor() {}

  ngOnInit(): void {
    this.Current = this.Current || 1;
    this.initializeRange();
  }

  initializeRange(): void {
    if (this.Current % this.pageSizeOptions[this.currentPageSize] === 0) {
      this.from =
        (this.Current / this.pageSizeOptions[this.currentPageSize] - 1) *
        this.pageSizeOptions[this.currentPageSize];
    } else {
      this.from =
        Math.floor(this.Current / this.pageSizeOptions[this.currentPageSize]) *
        this.pageSizeOptions[this.currentPageSize];
    }
    this.to =
      this.pageCount < this.from + this.pageSizeOptions[this.currentPageSize]
        ? this.pageCount
        : this.from + this.pageSizeOptions[this.currentPageSize];
  }

  handleStepToPage(page: number): void {
    this.Current = page;
  }

  handleStepToPreviousPage(): void {
    this.Current--;
  }

  handleStepToNextPage(): void {
    this.Current++;
  }

  handleStepToFirstPage(): void {
    this.Current = 1;
  }

  handleStepToLastPage(): void {
    this.Current = this.pageCount;
  }
}
