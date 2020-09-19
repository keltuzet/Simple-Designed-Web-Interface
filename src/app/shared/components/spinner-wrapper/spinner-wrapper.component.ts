import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner-wrapper',
  templateUrl: './spinner-wrapper.component.html',
  styleUrls: ['./spinner-wrapper.component.scss'],
})
export class SpinnerWrapperComponent {
  @Input() name: string;
  @Input() options: object;
}
