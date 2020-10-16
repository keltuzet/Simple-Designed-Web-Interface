import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-custom-list-group',
  templateUrl: './custom-list-group.component.html',
  styleUrls: ['./custom-list-group.component.scss'],
  animations: [
    trigger('appear', [
      state('void', style({ opacity: '0' })),
      transition('void <=> *', [animate(1500)]),
    ]),
    // trigger('disappear', [
    // ])
  ],
})
export class CustomListGroupComponent implements OnInit {
  list: string[] = [
    'Learn DI',
    'Practice angular animations',
    'Refactor form-field',
  ];
  icons = {
    delete: faTrashAlt,
  };

  constructor() {}

  ngOnInit(): void {}

  handleTaskAdd(task: string): void {
    this.list.push(task);
    event.preventDefault();
  }

  handleRemoveTask(index: number): void {
    this.list = this.list.filter((item, i) => i !== index);
  }
}
