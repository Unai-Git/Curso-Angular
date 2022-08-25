import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//* Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { PreciosComponent } from './components/precios/precios.component';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtegidaComponent,
    PreciosComponent,
    AuthButtonComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //* Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-secrjsic.us.auth0.com',
      clientId: 'P1O7jNl997bvb3QJLVEtBWWX7veHYzUS',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
