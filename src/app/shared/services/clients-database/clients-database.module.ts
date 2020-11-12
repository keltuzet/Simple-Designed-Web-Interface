import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';
import { ClientsDatabaseService } from './clients-database.service';

const clientDbConfig: DBConfig = {
  name: 'clientsDb',
  version: 1,
  objectStoresMeta: [
    {
      store: 'clients',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'Name', keypath: '_fullName', options: { unique: false } },
        { name: 'Email', keypath: 'email', options: { unique: false } },
        { name: 'Date Of birth', keypath: 'DOB', options: { unique: false } },
        {
          name: 'Phone number',
          keypath: 'phoneNumber',
          options: { unique: false },
        },
        {
          name: 'Last seen date',
          keypath: 'lastSeenDate',
          options: { unique: false },
        },
        {
          name: 'Last Transaction date',
          keypath: 'lastTransactionDate',
          options: { unique: false },
        },
        { name: 'Account', keypath: 'account', options: { unique: false } },
        { name: 'Status', keypath: 'status', options: { unique: false } },
      ],
    },
  ],
};

@NgModule({
  imports: [NgxSpinnerModule, NgxIndexedDBModule.forRoot(clientDbConfig)],
  providers: [ClientsDatabaseService],
})
export class ClientsDatabaseModule {}
