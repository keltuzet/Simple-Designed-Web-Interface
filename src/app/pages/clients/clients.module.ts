import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  EmptyTableStateModule,
  FieldModule,
  NumericInputModule,
  SpinnerWrapperModule,
  ViewerModule,
  DateControlsModule,
  SelectModule,
} from '@shared/components';
import {
  AnchorLinkFormatModule,
  ClientStatusModule,
  LocalDateModule,
} from '@shared/pipes';
import { SharedFormsModule, SharedModule } from '@shared/modules';
import { ClientsDatabaseModule } from '@shared/services';
import { ClientsComponent } from './clients.component';
import { ClientStatusComponent } from './components';

@NgModule({
  declarations: [ClientsComponent, ClientStatusComponent],
  imports: [
    SharedModule,
    SharedFormsModule,
    ViewerModule,
    EmptyTableStateModule,
    SpinnerWrapperModule,
    NumericInputModule,
    FieldModule,
    RouterModule,
    ClientsDatabaseModule,
    AnchorLinkFormatModule,
    LocalDateModule,
    ClientStatusModule,
    SelectModule,
    DateControlsModule
  ],
  providers: [],
})
export class ClientsModule {}
