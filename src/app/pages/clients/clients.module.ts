import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  EmptyTableStateModule,
  SpinnerWrapperModule,
  ViewerModule,
} from '@shared/components';
import { SharedModule } from '@shared/modules';
import { ClientsDatabaseModule } from '@shared/services';
import { ClientsComponent } from './clients.component';

@NgModule({
  declarations: [ClientsComponent],
  imports: [
    SharedModule,
    ViewerModule,
    EmptyTableStateModule,
    SpinnerWrapperModule,
    RouterModule,
    ClientsDatabaseModule,
  ],
  exports: [ClientsComponent],
  providers: [],
})
export class ClientsModule {}
