import { Component, OnInit } from '@angular/core';
import { ROUTE } from '@shared/const';
import { Icons } from './const';
import { LinkModel } from './model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  icons = Icons;

  get links(): LinkModel[] {
    return [
      {
        icon: Icons.home,
        path: ROUTE.home,
        text: 'Home'
      },
      {
        icon: Icons.clients,
        path: ROUTE.clients,
        text: 'Clients'
      },
      {
        icon: Icons.contacts,
        path: ROUTE.contacts,
        text: 'Contacts'
      },
      {
        icon: Icons.animations,
        path: ROUTE.animations,
        text: 'Animations'
      },
    ];
  }

  constructor() {}

  ngOnInit(): void {}
}
