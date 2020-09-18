import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-table-state',
  templateUrl: './empty-table-state.component.html',
  styleUrls: ['./empty-table-state.component.scss'],
})
export class EmptyTableStateComponent {
  @Input() colspan: number;
}
