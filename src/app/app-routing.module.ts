import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTE } from '@shared/const/route.const';
import { ClientsComponent } from '@pages/clients/clients.component';
import { DessertComponent } from '@pages/dessert/dessert.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { InfoClientComponent } from '@pages/info-client/info-client.component';
import { ClientNotFoundComponent } from '@pages/client-not-found/client-not-found.component';
import { ContactsComponent } from '@pages/contacts/contacts.component';
import { AnimationsComponent } from '@pages/animations/animations.component';

const routes: Routes = [
  { path: ROUTE.root, redirectTo: `/${ROUTE.home}`, pathMatch: 'full' },
  { path: ROUTE.home, component: DessertComponent },
  { path: ROUTE.clients, component: ClientsComponent },
  { path: ROUTE.client_id, component: InfoClientComponent },
  { path: ROUTE.client_not_found, component: ClientNotFoundComponent },
  { path: ROUTE.contacts, component: ContactsComponent },
  { path: ROUTE.animations, component: AnimationsComponent },
  {
    path: ROUTE.weather,
    loadChildren: () =>
      import('@pages/weather/weather.module').then((m) => m.WeatherModule),
  },
  { path: ROUTE.not_found, component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
