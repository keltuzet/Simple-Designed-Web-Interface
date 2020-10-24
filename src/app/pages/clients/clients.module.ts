import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  EmptyTableStateModule,
  FieldModule,
  NumericInputModule,
  SpinnerWrapperModule,
  ViewerModule,
} from '@shared/components';
import { AnchorLinkFormatModule } from '@shared/pipes';
import { SharedFormsModule, SharedModule } from '@shared/modules';
import { ClientsDatabaseModule } from '@shared/services';
import { ClientsComponent } from './clients.component';

@NgModule({
  declarations: [ClientsComponent],
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
  ],
  exports: [ClientsComponent],
  providers: [],
})
export class ClientsModule {}
