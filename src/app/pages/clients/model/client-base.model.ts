import { ClientStatusEnum } from '../enum';

export class ClientBaseModel {
  id: number;
  firstName: string;
  lastName: string;
  middleName?: string;
  DOB: string | Date;
  email: string;
  lastSeenDate: string | Date;
  lastTransaction: string | Date;
  account: number;
  status: ClientStatusEnum;

  get getFullName(): string {
    return `${this.lastName} ${this.firstName} ${this.middleName}`;
  }

  constructor(obj: Partial<ClientBaseModel>) {
    Object.assign(this, obj);
  }
}
