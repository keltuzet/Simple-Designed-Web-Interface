import { Injectable, Injector } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { ClientsData } from '@pages/clients/data';
import {
  ClientBaseModel,
  ClientBaseResponseModel,
} from '@pages/clients/model/client-base.model';
import { SPINNER_NAMES } from '@shared/const';
import { SpinnerService } from '../spinner';

@Injectable()
export class ClientsDatabaseService extends SpinnerService {
  private clients: ClientBaseResponseModel[] = ClientsData;
  get currentFreeId(): number {
    return (
      Math.max(
        ...this.clients.map((client: ClientBaseResponseModel) => client.id)
      ) + 1
    );
  }

  constructor(injector: Injector) {
    super(injector);
  }

  getClients(): Observable<ClientBaseModel[]> {
    return this.skipSpinner(
      of(ClientsData as ClientBaseModel[]).pipe(
        delay(400),
        map((clients) => clients.map((client) => new ClientBaseModel(client)))
      ),
      SPINNER_NAMES.CLIENTS_BASE_TABLE
    );
  }

  getClientById(
    id: number,
    spinnerName?: string
  ): Observable<ClientBaseModel | null> {
    let client: any = this.clients.find((cl) => cl.id === id);
    client = client ? new ClientBaseModel(client) : null;
    return this.wrappSpinner(of(client).pipe(delay(1200)), spinnerName);
  }

  isClientExist(id: number): boolean {
    return this.clients.findIndex((client) => client.id === id) !== -1;
  }

  addClient(client: ClientBaseModel): Observable<number> {
    client.id = this.currentFreeId;
    this.clients.push(new ClientBaseModel(client));
    return of(this.currentFreeId);
  }

  editClient(client: ClientBaseModel): Observable<void> {
    const index = this.clients.findIndex((cl) => cl.id === client.id);
    if (index !== -1) {
      this.clients[index] = new ClientBaseModel(client);
    }

    return of(null);
  }

  deleteClient(id: number): Observable<void> {
    const index = this.clients.findIndex((cl) => cl.id === id);
    if (index !== -1) {
      this.clients.splice(index, 1);
      console.log(this.clients);
    }

    return of(null);
  }
}
