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

  constructor(injector: Injector) {
    super(injector);
  }

  getClients(): Observable<ClientBaseModel[]> {
    return this.skipSpinner(
      of(ClientsData as ClientBaseModel[]).pipe(
        delay(1200),
        map((clients) => clients.map((client) => new ClientBaseModel(client)))
      ),
      SPINNER_NAMES.CLIENTS_BASE_TABLE
    );
  }

  getClientById(
    id: number,
    spinnerName?: string
  ): Observable<ClientBaseModel | null> {
    let client: any = this.clients.find((client) => client.id === id);
    client = client ? new ClientBaseModel(client) : null;
    return this.wrappSpinner(of(client).pipe(delay(1200)), spinnerName);
  }

  isClientExist(id: number): boolean {
    return !!this.clients.find((client) => client.id === id);
  }
}
