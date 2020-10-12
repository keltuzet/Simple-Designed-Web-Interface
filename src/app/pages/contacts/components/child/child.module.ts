import { NgModule } from '@angular/core';
import { ContactsService } from '@pages/contacts/contacts.service';
import { ChildComponent } from './child.component';

@NgModule({
  declarations: [ChildComponent],
  imports: [],
  exports: [ChildComponent],
  providers: [ContactsService],
})
export class ChildModule {}
