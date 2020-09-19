import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IconModel } from '@shared/models';
import { Icons } from './const';

@Component({
  selector: 'app-client-not-found',
  templateUrl: './client-not-found.component.html',
  styleUrls: ['./client-not-found.component.scss'],
})
export class ClientNotFoundComponent {
  icons: IconModel = Icons;
  id: number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.id = activatedRoute.snapshot.params.id;
  }
}
