import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TableFilterItemComponent } from './components';
import { SharedModule } from '../../shared/modules';
import { DataBindVisibilityDirective } from '../../shared/directives';
import {
  SdwiNumericInputModule,
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
    SdwiNumericInputModule,
    ViewerModule,
    EmptyTableStateModule,
    SdwiPaginatorModule,
  ],
  exports: [DessertComponent],
  providers: [DessertService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DessertModule {}
