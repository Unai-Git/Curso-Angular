import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'equipos', component: EquiposComponent },
  { path: 'equipo/:id', component: EquipoComponent },
  { path: 'buscar/:texto', component: BuscadorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);



