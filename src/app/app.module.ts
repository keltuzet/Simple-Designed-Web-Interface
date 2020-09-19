import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DessertModule } from './pages/dessert/dessert.module';
import { ClientsModule } from '@pages/clients/clients.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderModule } from '@shared/components';
import { InfoClientModule } from './info-client/info-client.module';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    DessertModule,
    HeaderModule,
    InfoClientModule,
    ClientsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
