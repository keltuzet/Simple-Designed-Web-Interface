import { Injectable, Injector } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { SpinnerService } from '@shared/services';
import { SPINNER_NAMES } from '@shared/const';
import { ClientsData } from './data';
import { ClientBaseModel } from './model/client-base.model';

@Injectable()
export class ClientsService extends SpinnerService {

  constructor(injector: Injector) {
    super(injector);
  }

  getClients(): Observable<ClientBaseModel[]> {
    return this.skipSpinner(
      of(ClientsData as ClientBaseModel[]).pipe(
        delay(20000),
        map((clients) => clients.map((client) => new ClientBaseModel(client)))
      ),
      SPINNER_NAMES.CLIENTS_BASE_TABLE
    );
  }
}
