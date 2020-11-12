import { Injectable, Injector } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { delay, map, mapTo } from 'rxjs/operators';
import { NgxIndexedDBService } from 'ngx-indexed-db';

import { Pagination } from '@shared/models';
import { SPINNER_NAMES } from '@shared/const';
import { ClientsData } from '@shared/data';
import {
  ClientBaseModel,
  ClientIdentifiableModel,
  ClientViewModel,
} from '@shared/models/client-base.model';

import { SpinnerService } from '../spinner';
import { CLIENTS_STORE_NAME } from './consts';

@Injectable()
export class ClientsDatabaseService extends SpinnerService {
  private clients: ClientIdentifiableModel[] = [];
  private clientsStoreName = CLIENTS_STORE_NAME;
  private clientsSamplesForInsurance = ClientsData;

  constructor(
    injector: Injector,
    private dbService: NgxIndexedDBService<ClientBaseModel>
  ) {
    super(injector);
    this.fillStoreWithSample();
  }

  getClients(pagination: Pagination): Observable<ClientViewModel[]> {
    return this.skipThroughSpinnerWrap(
      this.dbService.getAll(this.clientsStoreName).pipe(
        delay(400),
        map((clients: ClientIdentifiableModel[]) => {
          const expectedInitialRange =
            (pagination.page - 1) * pagination.pageSize;
          const expectedEndRange = pagination.page * pagination.pageSize;
          let actualInitialRange: number;
          let actualEndRange: number;
          if (expectedInitialRange < clients.length) {
            actualInitialRange = expectedInitialRange;
            actualEndRange =
              expectedEndRange <= clients.length
                ? expectedEndRange
                : clients.length;
          } else {
            actualInitialRange = 0;
            actualEndRange = 0;
          }
          return clients
            .slice(actualInitialRange, actualEndRange)
            .map((client) => new ClientViewModel(client));
        })
      ),
      SPINNER_NAMES.CLIENTS_BASE_TABLE
    );
  }

  getClientById(
    id: number,
    spinnerName?: string
  ): Observable<ClientBaseModel | null> {
    let client: any = this.clients.find((cl) => cl.id === id);
    client = client ? new ClientViewModel(client) : null;
    return this.wrapStreamWithSpinner(of(client).pipe(delay(1200)), spinnerName);
  }

  isClientExist(id: number): boolean {
    return this.clients.findIndex((client) => client.id === id) !== -1;
  }

  addClient(client: ClientBaseModel, loaderName?: string): Observable<number> {
    return this.wrapStreamWithSpinner<number>(
      this.dbService.add(this.clientsStoreName, client).pipe(delay(400)),
      loaderName
    );
  }

  editClient(client: ClientIdentifiableModel, loaderName?: string): Observable<void> {
    return this.wrapStreamWithSpinner<void>(
      this.dbService
        .update(this.clientsStoreName, client)
        .pipe(delay(400), mapTo(null)),
      loaderName
    );
  }

  removeClient(id: number, loaderName?: string): Observable<void> {
    return this.wrapStreamWithSpinner<void>(
      this.dbService
        .delete(this.clientsStoreName, id)
        .pipe(delay(400), mapTo(null)),
      loaderName
    );
  }

  private fillStoreWithSample(): void {
    const streams$: Observable<number>[] = this.clientsSamplesForInsurance.map(
      (client) => {
        return this.dbService.add(this.clientsStoreName, client);
      }
    );
    forkJoin(streams$).subscribe((date) => {
      console.log('The samples successfully saved!');
    });
  }
}
