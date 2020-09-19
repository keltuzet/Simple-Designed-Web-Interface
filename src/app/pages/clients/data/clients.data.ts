import { ClientStatusEnum } from '../enum';
import { ClientBaseModel } from '../model/client-base.model';

export const ClientsData: Partial<ClientBaseModel>[] = [
  {
    lastName: 'Sam',
    firstName: 'Porter',
    middleName: '',
    DOB: '1989-03-14',
    email: 'sam@mail.com',
    lastSeenDate: '2020-09-18',
    lastTransaction: '2020-09-18',
    account: 89000,
    status: ClientStatusEnum.Active,
  },
  {
    lastName: 'Elina',
    firstName: 'Pink',
    middleName: 'Hoper',
    DOB: '1977-05-24',
    email: 'pink@mail.com',
    lastSeenDate: '2020-02-18',
    lastTransaction: '2020-01-04',
    account: 128000,
    status: ClientStatusEnum.Blocked,
  },
  {
    lastName: 'Phill',
    firstName: 'Joses',
    middleName: '',
    DOB: '1995-03-14',
    email: 'phill@mail.com',
    lastSeenDate: '2018-39-28',
    lastTransaction: '2017-09-03',
    account: 400,
    status: ClientStatusEnum.Deleted,
  },
  {
    lastName: 'Jhonatan',
    firstName: 'Joster',
    middleName: '',
    DOB: '1981-03-14',
    email: 'koili@mail.com',
    lastSeenDate: '2020-08-22',
    lastTransaction: '2020-08-22',
    account: 310785,
    status: ClientStatusEnum.Active,
  },
];
