import { ClientStatusEnum } from '@shared/enums';
import {
  PersonNameModel,
  parsePersonName
} from './peson-name.model';
import { omit } from 'lodash';

export interface ClientCommonModel {
  DOB: string | Date;
  email: string;
  phoneNumber: string;
  lastSeenDate: string | Date;
  lastTransactionDate: string | Date;
  account: number;
  status: ClientStatusEnum;
}

export interface ClientBaseModel extends ClientCommonModel, PersonNameModel {}

export interface ClientIdentifiableModel extends ClientBaseModel {
  id: number;
}

export interface ClientFormModel extends ClientCommonModel {
  fullName: string;
}

export class ClientViewModel implements ClientIdentifiableModel {
  id: number;
  firstName: string;
  lastName: string;
  middleName?: string;
  DOB: string | Date;
  email: string;
  phoneNumber: string;
  lastSeenDate: string | Date;
  lastTransactionDate: string | Date;
  account: number;
  status: ClientStatusEnum;

  get fullName(): string {
    return `${this.lastName} ${this.firstName} ${this.middleName || ''}`;
  }

  constructor(obj: ClientIdentifiableModel) {
    Object.assign(this, obj);
  }
}

export function parseClientForm(formValue: ClientFormModel): ClientBaseModel {
  return {
    ...(omit(formValue, 'fullName') as ClientCommonModel),
    ...(parsePersonName(formValue.fullName) as PersonNameModel)
  }
}
