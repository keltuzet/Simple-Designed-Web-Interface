import { OptionModel } from '@shared/components';
import { ClientStatusEnum } from '@shared/enums';

export const STATUS_OPTIONS: OptionModel[] = [
  {
    value: ClientStatusEnum.Active,
    viewValue: 'COMMON.ACTIVE',
  },
  {
    value: ClientStatusEnum.Blocked,
    viewValue: 'COMMON.BLOCKED',
  },
  {
    value: ClientStatusEnum.Removed,
    viewValue: 'COMMON.REMOVED',
  },
];
