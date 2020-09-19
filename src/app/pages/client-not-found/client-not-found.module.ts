import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ClientNotFoundComponent } from './client-not-found.component';

@NgModule({
  declarations: [ClientNotFoundComponent],
  exports: [ClientNotFoundComponent],
  imports: [FontAwesomeModule],
})
export class ClientNotFoundModule {}
