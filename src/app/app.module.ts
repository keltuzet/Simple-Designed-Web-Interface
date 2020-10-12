import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DessertModule } from '@pages/dessert/dessert.module';
import { ClientsModule } from '@pages/clients/clients.module';
import { NotFoundModule } from '@pages/not-found/not-found.module';
import { InfoClientModule } from '@pages/info-client/info-client.module';
import { ClientNotFoundModule } from '@pages/client-not-found/client-not-found.module';
import { ContactsModule } from '@pages/contacts/contacts.module';
import { HeaderModule } from '@shared/components';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ChildModule } from '@pages/contacts/components/child/child.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HeaderModule,
    DessertModule,
    NotFoundModule,
    InfoClientModule,
    ClientsModule,
    ClientNotFoundModule,
    ContactsModule,
    RouterModule,
    // ChildModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
