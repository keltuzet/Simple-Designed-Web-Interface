import { Component, OnInit } from '@angular/core';
import { ClientTableColumns } from '@shared/const';
import { Subscription } from 'rxjs';
import { ClientsService } from './clients.service';
import { ClientBaseModel } from './model/client-base.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  $subscription: Subscription[] = [];
  clients: ClientBaseModel[];
  clientsColumn = ClientTableColumns;

  constructor(private clientsService: ClientsService) {}

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.$subscription.push(
      this.clientsService.getClients().subscribe((clients) => {
        this.clients = clients;
      })
    );
  }
}
