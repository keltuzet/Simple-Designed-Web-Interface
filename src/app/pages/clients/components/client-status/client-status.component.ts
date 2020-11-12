import { Component, Input, OnInit } from '@angular/core';
import { faLock, faTrashAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { ClientStatusEnum } from '@shared/enums';

@Component({
  selector: 'app-client-status',
  template: `
    <span class="client-status" [ngClass]="statusCssClass">
      {{ status | clientStatus | translate }}
      <fa-icon [icon]="icons[status]"></fa-icon>
    </span>
  `,
  styles: [
    `
      .client-status {
        display: inline-flex;
        border-radius: 2px;
        padding: 0.25rem 0.5rem;
        color: #fff;
      }

      .client-status fa-icon {
        margin-left: 0.25rem;
      }

      .status-0 {
        background-color: #ff2929;
      }

      .status-1 {
        background-color: #c6c6c6;
      }

      .status-2 {
        background-color: #8ce324;
      }
    `,
  ],
})
export class ClientStatusComponent implements OnInit {
  @Input() public status: ClientStatusEnum;
  public icons = {
    [ClientStatusEnum.Blocked]: faLock,
    [ClientStatusEnum.Removed]: faTrashAlt,
    [ClientStatusEnum.Active]: faUser,
  };
  get statusCssClass(): string {
    return `status-${this.status}`;
  }

  constructor() {}

  ngOnInit(): void {}
}
