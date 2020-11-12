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
        text: 'HOME',
      },
      {
        icon: Icons.clients,
        path: ROUTE.clients,
        text: 'CLIENTS',
      },
      {
        icon: Icons.contacts,
        path: ROUTE.contacts,
        text: 'CONTACTS',
      },
      {
        icon: Icons.animations,
        path: ROUTE.animations,
        text: 'ANIMATIONS',
      },
      {
        icon: Icons.weather,
        path: ROUTE.weather,
        text: 'WEATHER',
      },
    ];
  }

  constructor() {}

  ngOnInit(): void {}

  formatLinkTitle(title: string): string {
    return `PAGES.${title}.TITLE`;
  }
}
