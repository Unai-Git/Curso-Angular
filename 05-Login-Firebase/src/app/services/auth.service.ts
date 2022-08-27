import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //* Crear nuevo usuario
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //* Iniciar Sesión
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apiKey = 'AIzaSyDLj3EahCJPNi4KN5oakg8fLzRjDji_Ga0';
  userToken: string | null = '';

  constructor(private http: HttpClient) {
    this.leerToken();
  }

  //* Nuevo Usuario
  signUp(usuario: UsuarioModel) {
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true,
    };

    //* Realizar una petición POST a la api de Google pasando authData
    return this.http
      .post(`${this.url}signUp?key=${this.apiKey}`, authData)
      .pipe(
        map((res) => {
          this.guardarToken(res['idToken']);
          return res;
        })
      );
  }

  //* Iniciar Sesión
  signIn(usuario: UsuarioModel) {
    // Otra manera distinta al signUp
    const { nombre, ...rest } = usuario;

    const authData = {
      ...rest,
      returnSecureToken: true,
    };

    //* Realizar una petición POST a la api de Google pasando authData
    return this.http
      .post(`${this.url}signInWithPassword?key=${this.apiKey}`, authData)
      .pipe(
        map((res) => {
          this.guardarToken(res['idToken']);
          return res;
        })
      );
  }

  //* Guardar Token
  private guardarToken(idToken: string) {
    this.userToken = idToken;

    localStorage.setItem('token', idToken);

    let hoy = new Date();
    hoy.setSeconds(3600);

    localStorage.setItem('expira', hoy.getTime.toString());
  }

  //* Leer Token
  private leerToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
  }

  //* Esta Autenticado
  isAuth(): boolean {
    if (this.userToken.length < 2) {
      return false;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if (expiraDate > new Date()) {
      return true;
    } else {
      return false;
    }
  }

  //* Cerrar Sesión
  logOut() {
    localStorage.removeItem('token');
  }
}
