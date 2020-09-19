import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { ClientsData } from './data';
import { ClientBaseModel } from './model/client-base.model';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  constructor() {}

  getClients(): Observable<ClientBaseModel[]> {
    return of(ClientsData as ClientBaseModel[]).pipe(
      delay(700),
      map((clients) => clients.map((client) => new ClientBaseModel(client)))
    );
  }
}
