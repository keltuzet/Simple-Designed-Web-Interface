import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  EmptyTableStateModule,
  SdwiErrorModule,
  SdwiFormFieldModule,
  SdwiLabelModule,
  SdwiNumericInputModule,
  SpinnerWrapperModule,
  ViewerModule,
} from '@shared/components';
import { SdwiInputModule } from '@shared/directives';
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
    SdwiNumericInputModule,
    SdwiFormFieldModule,
    SdwiLabelModule,
    SdwiErrorModule,
    SdwiInputModule,
    RouterModule,
    ClientsDatabaseModule,
  ],
  exports: [ClientsComponent],
  providers: [],
})
export class ClientsModule {}
