import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import { APP_ROUTING } from './app.routes';

//Services
import { EquiposService } from './services/equipos.service';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EquiposComponent,
    EquipoComponent,
    BuscadorComponent,
  ],
  imports: [BrowserModule, APP_ROUTING],
  providers: [EquiposService],
  bootstrap: [AppComponent],
})
export class AppModule {}
