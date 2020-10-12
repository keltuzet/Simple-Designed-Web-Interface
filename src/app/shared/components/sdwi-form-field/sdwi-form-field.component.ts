import {
  AfterContentInit,
  Component,
  ContentChild,
  OnInit,
} from '@angular/core';
import { SdwiInputDirective } from '@shared/directives';
import { SdwiErrorComponent } from '../sdwi-error';

@Component({
  selector: 'app-sdwi-form-field',
  templateUrl: './sdwi-form-field.component.html',
  styleUrls: ['./sdwi-form-field.component.scss'],
})
export class SdwiFormFieldComponent implements OnInit, AfterContentInit {
  @ContentChild(SdwiErrorComponent, { static: false })
  private errorComponent: SdwiErrorComponent;

  @ContentChild(SdwiInputDirective, { static: false })
  private swdiInput: SdwiInputDirective;

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    if (!this.swdiInput) {
      throw new Error(`The SdwiInputDirective isn't provided!`);
    }
    if (this.errorComponent) {
      this.swdiInput.control.statusChanges.subscribe(() => {
        this.errorComponent.errorText = this.swdiInput.control.control[
          // tslint:disable-next-line: no-string-literal
          'errorMessage'
        ];
      });
    }
  }
}
