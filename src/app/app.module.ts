import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';


import { DessertModule } from '@pages/dessert/dessert.module';
import { ClientsModule } from '@pages/clients/clients.module';
import { NotFoundModule } from '@pages/not-found/not-found.module';
import { InfoClientModule } from '@pages/info-client/info-client.module';
import { ClientNotFoundModule } from '@pages/client-not-found/client-not-found.module';
import { AnimationsModule } from '@pages/animations/animations.module';
import { ContactsModule } from '@pages/contacts/contacts.module';
import { I18nModule } from '@i18n';
import { environment } from '@environments/environment';
import { HeaderModule } from '@shared/components';
import { EN, EN_LABEL, LANG_STORE_KEY, RU, RU_LABEL } from '@shared/const';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

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
    AnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    I18nModule.forRoot({
      defaultLang: RU,
      languages: [RU, EN],
      languageOptions: [
        { value: RU, label: RU_LABEL },
        { value: EN, label: EN_LABEL },
      ],
      storeKey: LANG_STORE_KEY,
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
