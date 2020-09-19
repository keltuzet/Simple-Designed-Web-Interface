import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmptyTableStateModule, SpinnerWrapperModule, ViewerModule } from '@shared/components';
import { SharedModule } from '@shared/modules';
import { ClientsComponent } from './clients.component';
import { ClientsService } from './clients.service';

@NgModule({
  declarations: [ClientsComponent],
  imports: [SharedModule, ViewerModule, EmptyTableStateModule, SpinnerWrapperModule, RouterModule],
  exports: [ClientsComponent],
  providers: [ClientsService]
})
export class ClientsModule {}
