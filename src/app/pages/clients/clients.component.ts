import { Component, OnInit } from '@angular/core';
import { ClientTableColumns } from '@shared/const';
import { Observable, Subscription } from 'rxjs';
import {} from 'lodash'

import { ClientBaseModel } from './model/client-base.model';
import { Router } from '@angular/router';
import { ClientsDatabaseService } from '@shared/services';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  $subscription: Subscription[] = [];
  clients$: Observable<ClientBaseModel[]>;
  clients: ClientBaseModel[];
  clientsColumn = ClientTableColumns;

  constructor(private clientsDatabaseService: ClientsDatabaseService, private router: Router) {}

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.clients$ = this.clientsDatabaseService.getClients();
    this.$subscription.push(
      this.clients$.subscribe((clients) => {
        this.clients = clients;
      })
    );
  }

  handleNavigateToClient(id: number) {
    this.router.navigate([`client/:${id}`])
  }
}
