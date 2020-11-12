import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  PHONE_NUMBER_MASK,
  SPINNER_NAMES,
} from '@shared/const';
import { Observable, Subscription } from 'rxjs';

import {
  ClientViewModel,
  ClientBaseModel,
  parseClientForm,
} from '@shared/models';
import {
  ClientTableColumns,
  CLIENT_FROM,
  STATUS_OPTIONS,
} from './consts';
import { Router } from '@angular/router';
import { ClientsDatabaseService } from '@shared/services';
import { Validators } from '@angular/forms';
import { ExtendedFormControl, ExtendedFormGroup } from '@shared/models';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  clients$: Observable<ClientViewModel[]>;
  clients: ClientViewModel[];
  $subscription: Subscription[] = [];
  clientsColumn = ClientTableColumns;
  phoneNumberMask = PHONE_NUMBER_MASK;
  clientForm = CLIENT_FROM;
  statusOptions = STATUS_OPTIONS;
  editRowIndex: number;
  isCreatingClient = false;

  @ViewChild('clientCreateCnt', { read: ViewContainerRef })
  clientCreateCnt: ViewContainerRef;
  @ViewChild('rowFormTpl', { read: TemplateRef })
  clientCreateTpl: TemplateRef<any>;

  constructor(
    private clientsDatabaseService: ClientsDatabaseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.clients$ = this.clientsDatabaseService.getClients({
      page: 1,
      pageSize: 10,
    });
    this.$subscription.push(
      this.clients$.subscribe((clients) => {
        this.clients = clients;
      })
    );
  }

  handleNavigateToClient(id: number): void {
    this.router.navigate(['/client', `${id}`]);
  }

  handleShowEditModel(index: number, client: ClientViewModel): void {
    this.editRowIndex = index;
    this.clientForm.reset();
    this.clientForm.patchValue({ ...client, fullName: client.fullName });
  }

  handleUpdateRow(client: ClientViewModel): void {
    this.clientForm.markAllAsTouched();
    if (this.clientForm.invalid) {
      return;
    }
    this.clientsDatabaseService
      .editClient(
        { ...parseClientForm(this.clientForm.getRawValue()), id: client.id },
        SPINNER_NAMES.CLIENTS_BASE_TABLE
      )
      .subscribe(() => {
        this.getClients();
      });
    this.editRowIndex = null;
  }

  handleCancelEdit(): void {
    this.editRowIndex = null;
  }

  handleDeleteDessert(id: number): void {
    this.clientsDatabaseService
      .removeClient(id, SPINNER_NAMES.CLIENTS_BASE_TABLE)
      .subscribe(() => {
        this.getClients();
      });
  }

  handleAddClient(): void {
    const clientCreateRef = this.clientCreateCnt.createEmbeddedView(
      this.clientCreateTpl, {
        isCreate: true
      }
    );
    this.clientCreateCnt.insert(clientCreateRef);
    this.isCreatingClient = true;
    this.clientForm.reset();
  }

  handleCreate(): void {
    this.clientForm.markAllAsTouched();
    if (this.clientForm.invalid) {
      return;
    }
    this.clientCreateCnt.remove(0);
    const formValue: ClientBaseModel = parseClientForm(this.clientForm.getRawValue());
    this.clientsDatabaseService
      .addClient(formValue, SPINNER_NAMES.CLIENTS_BASE_TABLE)
      .subscribe(() => {
        this.clients = null;
        this.getClients();
      });
    this.isCreatingClient = false;
  }

  handleCancelCreate(): void {
    this.clientCreateCnt.remove(0);
    this.isCreatingClient = false;
  }
}
