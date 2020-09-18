import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTE } from './shared/const/route.const';
import { ClientsComponent } from './pages/clients/clients.component';
import { DessertComponent } from './pages/dessert/dessert.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: ROUTE.root, component: DessertComponent },
  { path: ROUTE.home, component: DessertComponent },
  { path: ROUTE.clients, component: ClientsComponent },
  { path: ROUTE.not_found, component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
