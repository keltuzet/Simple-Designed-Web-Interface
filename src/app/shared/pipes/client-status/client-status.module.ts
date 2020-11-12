import { NgModule } from '@angular/core';
import { ClientStatusPipe } from './client-status.pipe';

@NgModule({
  declarations: [ClientStatusPipe],
  exports: [ClientStatusPipe],
})
export class ClientStatusModule {}
