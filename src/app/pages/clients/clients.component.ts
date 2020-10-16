import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ClientTableColumns, DATE_MASK, PHONE_NUMBER_MASK } from '@shared/const';
import { Observable, Subscription } from 'rxjs';
import {} from 'lodash';

import { ClientBaseModel } from './model/client-base.model';
import { Router } from '@angular/router';
import { ClientsDatabaseService } from '@shared/services';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExtendedFormControl, ExtendedFormGroup } from '@shared/models';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  clients$: Observable<ClientBaseModel[]>;
  clients: ClientBaseModel[];
  $subscription: Subscription[] = [];
  clientsColumn = ClientTableColumns;
  phoneNumberMask = PHONE_NUMBER_MASK;
  dateMask = DATE_MASK;
  clientCreateForm = new ExtendedFormGroup({
    fullName: new ExtendedFormControl(null, Validators.required),
    dob: new ExtendedFormControl(null),
    email: new ExtendedFormControl(null, Validators.email),
    lastSeenDate: new ExtendedFormControl(),
    lastTransaction: new ExtendedFormControl(),
    account: new ExtendedFormControl(),
    status: new ExtendedFormControl(),
  });
  clientEditForm = new ExtendedFormGroup({
    fullName: new ExtendedFormControl(null, Validators.required),
    DOB: new ExtendedFormControl(null),
    email: new ExtendedFormControl(null, Validators.email),
    lastSeenDate: new ExtendedFormControl({value: null, disabled: true}),
    lastTransaction: new ExtendedFormControl({value: null, disabled: true}),
    account: new ExtendedFormControl({value: null, disabled: true}),
    status: new ExtendedFormControl(),
  });
  // <td>{{ client.getFullName }}</td>
  // <td>{{ client.DOB }}</td>
  // <td>{{ client.email }}</td>
  // <td>{{ client.lastSeenDate }}</td>
  // <td>{{ client.lastTransaction }}</td>
  // <td>{{ client.account }}</td>
  // <td>{{ client.status }}</td>
  editRowIndex: number;
  isCreatingClient = false;

  @ViewChild('clientCreateCnt', {read: ViewContainerRef}) clientCreateCnt: ViewContainerRef;
  @ViewChild('rowCreateTpl', {read: TemplateRef}) clientCreateTpl: TemplateRef<any>;

  constructor(
    private clientsDatabaseService: ClientsDatabaseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.clients$ = this.clientsDatabaseService.getClients();
    this.$subscription.push(
      this.clients$.subscribe((clients) => {
        this.clients = clients;
      })
    );
  }

  handleNavigateToClient(id: number): void {
    this.router.navigate(['/client', `${id}`]);
  }

  handleShowEditModel(index: number, client: ClientBaseModel): void {
    this.editRowIndex = index;
    this.clientEditForm.patchValue({...client, fullName: client.fullName});
  }

  handleUpdateRow(client: ClientBaseModel): void {
    this.clientsDatabaseService.editClient({...this.clientEditForm.getRawValue(), id: client.id}).subscribe(() => {
      this.clients = null;
      this.getClients();
    });
    this.editRowIndex = null;
  }

  handleCancelEdit(): void {
    this.editRowIndex = null;
  }

  handleDeleteDessert(id: number): void {
    this.clientsDatabaseService.deleteClient(id).subscribe(() => {
      this.clients = null;
      this.getClients();
    });
  }

  handleAddClient(): void {
    const clientCreateRef = this.clientCreateCnt.createEmbeddedView(this.clientCreateTpl, {});
    this.clientCreateCnt.insert(clientCreateRef);
    this.isCreatingClient = true;
  }

  handleCreate(): void {
    if (this.clientCreateForm.invalid) {
      return;
    }
    this.clientCreateCnt.remove(0);
    const formValue: ClientBaseModel = this.clientCreateForm.getRawValue();
    this.clientsDatabaseService.addClient(formValue).subscribe(() => {
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
