import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//* Gráficos
import { NgChartsModule } from 'ng2-charts';
import { LineaComponent } from './components/linea/linea.component';

@NgModule({
  declarations: [AppComponent, LineaComponent],
  imports: [BrowserModule, AppRoutingModule, NgChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
