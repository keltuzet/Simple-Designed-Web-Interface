import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTE } from './shared/const/route.const';
import { ClientsComponent } from './pages/clients/clients.component';
import { DessertComponent } from './pages/dessert/dessert.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { InfoClientComponent } from './info-client/info-client.component';

const routes: Routes = [
  { path: ROUTE.root, redirectTo: `/${ROUTE.home}`, pathMatch: 'full' },
  { path: ROUTE.home, component: DessertComponent },
  { path: ROUTE.clients, component: ClientsComponent },
  { path: ROUTE.client_id, component: InfoClientComponent },
  { path: ROUTE.not_found, component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
