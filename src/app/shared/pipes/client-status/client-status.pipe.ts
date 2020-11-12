import { Pipe, PipeTransform } from '@angular/core';
import { ClientStatusEnum } from '@shared/enums';

@Pipe({
  name: 'clientStatus',
})
export class ClientStatusPipe implements PipeTransform {
  status: { [key: number]: string } = {
    [ClientStatusEnum.Removed]: 'COMMON.REMOVED',
    [ClientStatusEnum.Blocked]: 'COMMON.BLOCKED',
    [ClientStatusEnum.Active]: 'COMMON.ACTIVE',
  };

  transform(value: ClientStatusEnum): string {
    return this.status[value];
  }
}
