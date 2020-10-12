import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

import {
  HeaderModule,
  SdwiErrorModule,
  SdwiFormFieldModule,
  SdwiLabelModule,
} from '@shared/components';
import { SdwiInputModule } from '@shared/directives';
import { ContactsComponent } from './contacts.component';

import { LoginComponent } from './components';
import { ChildModule } from './components/child/child.module';
import { SimpleDirective } from './directives/simple.directive';
import { CompletedDirective } from './directives/completed.directive';
import { DessertService } from '@pages/dessert/dessert.service';
import { ContactsService } from './contacts.service';
import { SharedFormsModule } from '@shared/modules';

@NgModule({
  declarations: [
    ContactsComponent,
    LoginComponent,
    SimpleDirective,
    CompletedDirective,
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    SharedFormsModule,
    SdwiFormFieldModule,
    SdwiLabelModule,
    SdwiErrorModule,
    SdwiInputModule,
    HeaderModule,
    ChildModule
  ],
  exports: [],
  providers: [],
})
export class ContactsModule {}
