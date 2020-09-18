import { Component, OnInit } from '@angular/core';
import { Icons } from './const';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  icons = Icons;

  constructor() {}

  ngOnInit(): void {}
}
