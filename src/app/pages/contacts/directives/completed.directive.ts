import { Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appCompleted]'
})
export class CompletedDirective implements OnInit {

  @HostListener('click') onClick(): void {
    console.log('click');
    this.elRef.nativeElement.style.color = 'red';
  }

  constructor(
    private elRef: ElementRef<HTMLDivElement>
  ) { }

  ngOnInit(): void {
    // console.log(this.elRef);
  }
}
