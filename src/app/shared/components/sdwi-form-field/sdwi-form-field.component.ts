import { AfterContentInit, AfterViewInit, Component, ContentChild, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SdwiInputDirective } from '@shared/directives';
import { SdwiErrorComponent } from '../sdwi-error';

@Component({
  selector: 'app-sdwi-form-field',
  templateUrl: './sdwi-form-field.component.html',
  styleUrls: ['./sdwi-form-field.component.scss'],
})
export class SdwiFormFieldComponent implements OnInit, AfterContentInit, AfterViewInit {
  @ContentChild(SdwiErrorComponent, { static: false })
  private errorComponent: SdwiErrorComponent;

  @ContentChild(SdwiInputDirective, { static: false })
  private control: SdwiInputDirective;

  constructor() {}

  ngOnInit(): void {
  }

  ngAfterContentInit() {

  }

  ngAfterViewInit() {
    console.log(this.errorComponent);
    console.log(this.control);
  }
}
