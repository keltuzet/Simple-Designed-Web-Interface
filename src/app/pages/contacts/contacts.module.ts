import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';

import {
  HeaderModule,
  FieldModule,
  NumericInputModule,
  SelectModule,
} from '@shared/components';
import { SharedFormsModule } from '@shared/modules';

import { ContactsComponent } from './contacts.component';
import { LoginComponent } from './components';
import { ChildModule } from './components/child/child.module';
import { SimpleDirective } from './directives/simple.directive';
import { CompletedDirective } from './directives/completed.directive';
import { NgxMaskModule } from 'ngx-mask';

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
    FieldModule,
    NumericInputModule,
    HeaderModule,
    ChildModule,
    SelectModule,
    NgxMaskModule.forRoot()
  ],
  exports: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContactsModule {}
