import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ClientsDatabaseService } from './clients-database.service';

@NgModule({
  imports: [NgxSpinnerModule],
  providers: [ClientsDatabaseService],
})
export class ClientsDatabaseModule {}
