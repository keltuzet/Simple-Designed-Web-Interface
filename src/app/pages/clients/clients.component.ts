import { Component, OnInit } from '@angular/core';
import { ClientTableColumns } from '@shared/const';
import { Observable, Subscription } from 'rxjs';
import {} from 'lodash'
import { ClientsService } from './clients.service';
import { ClientBaseModel } from './model/client-base.model';

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

  constructor(private clientsService: ClientsService) {}

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.clients$ = this.clientsService.getClients();
    this.$subscription.push(
      this.clients$.subscribe((clients) => {
        this.clients = clients;
      })
    );
  }
}
