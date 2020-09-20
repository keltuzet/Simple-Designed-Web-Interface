import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

import { SdwiFormFieldModule, SdwiLabelModule } from '@shared/components';
import { ContactsComponent } from './contacts.component';
import { ContactsService } from './contacts.service';

@NgModule({
  declarations: [ContactsComponent],
  imports: [NgxSpinnerModule, ReactiveFormsModule, FormsModule, SdwiFormFieldModule, SdwiLabelModule],
  exports: [ContactsComponent],
  providers: [ContactsService],
})
export class ContactsModule {}
