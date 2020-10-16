import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TableFilterItemComponent } from './components';
import { SharedFormsModule, SharedModule } from '../../shared/modules';
import { DataBindVisibilityDirective } from '../../shared/directives';
import {
  NumericInputModule,
  ViewerModule,
  EmptyTableStateModule,
  SdwiPaginatorModule,
} from '../../shared/components';
import { DessertComponent } from './dessert.component';
import { DessertService } from './dessert.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DessertComponent,
    DataBindVisibilityDirective,
    TableFilterItemComponent,
  ],
  imports: [
    FormsModule,
    SharedModule,
    SharedFormsModule,
    NumericInputModule,
    ViewerModule,
    EmptyTableStateModule,
    SdwiPaginatorModule,
  ],
  exports: [DessertComponent],
  providers: [DessertService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DessertModule {}
