import { isNil } from 'lodash';
import { ClientStatusEnum } from '../enum';
import {
  PersonNameModel,
  parsePersonName,
  PersonFullNameModel,
} from './peson-name.model';

export interface ClientBaseResponseModel extends PersonNameModel {
  id: number;
  DOB: string | Date;
  email: string;
  phoneNumber: string,
  lastSeenDate: string | Date;
  lastTransaction: string | Date;
  account: number;
  status: ClientStatusEnum;
}

export class ClientBaseModel implements ClientBaseResponseModel {
  id: number;
  firstName: string;
  lastName: string;
  middleName?: string;
  DOB: string | Date;
  email: string;
  phoneNumber: string;
  lastSeenDate: string | Date;
  lastTransaction: string | Date;
  account: number;
  status: ClientStatusEnum;

  get fullName(): string {
    return `${this.lastName} ${this.firstName} ${this.middleName || ''}`;
  }

  constructor(obj: Partial<ClientBaseModel & PersonFullNameModel>) {
    let parsedNames: PersonNameModel;
    if (!isNil(obj.fullName)) {
      parsedNames = parsePersonName(obj.fullName);
      Object.assign(this, {
        id: obj.id,
        firstName: parsedNames.firstName,
        lastName: parsedNames.lastName,
        middleName: parsedNames.middleName,
        DOB: obj.DOB,
        email: obj.email,
        phoneNumber: obj.phoneNumber,
        lastSeenDate: obj.lastSeenDate,
        lastTransaction: obj.lastTransaction,
        account: obj.account,
        status: obj.status,
      });
    } else {
      Object.assign(this, obj, parsedNames);
    }
  }
}
