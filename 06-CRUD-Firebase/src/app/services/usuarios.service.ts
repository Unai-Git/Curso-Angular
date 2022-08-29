import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, delay } from 'rxjs/operators';

import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  //* Propiedades
  private url =
    'https://curso-angular-185ac-default-rtdb.europe-west1.firebasedatabase.app';

  //! Añadir .json al final del url   para usar el API de Firebase

  //* Constructor
  constructor(private http: HttpClient) {}

  //* Operaciones CRUD

  //? CREAR UN NUEVO USUARIO
  crearUsuario(usuario: UsuarioModel) {
    return this.http.post(`${this.url}/usuarios.json`, usuario).pipe(
      map((res: any) => {
        usuario.id = res.name;
        return usuario;
      })
    );
  }

  //? ACTUALIZAR UN USUARIO
  actualizarUsuario(usuario: UsuarioModel) {
    const usuarioTemp = {
      ...usuario,
    };

    delete usuarioTemp.id;

    return this.http.put(
      `${this.url}/usuarios/${usuario.id}.json`,
      usuarioTemp
    );
  }

  //? MOSTRAR USUARIOS
  mostrarUsuarios() {
    return this.http
      .get(`${this.url}/usuarios.json`)
      .pipe(map(this.crearArray), delay(1000));
  }

  //? MOSTRAR USUARIO POR ID
  mostrarUsuarioPorID(id: string) {
    return this.http.get(`${this.url}/usuarios/${id}.json`);
  }

  //? ELIMINAR USUARIO POR ID
  eliminarUsuarioPorID(id: string) {
    return this.http.delete(`${this.url}/usuarios/${id}.json`);
  }

  //* Crear Array de los datos de firebase(Obj)
  private crearArray(usuariosObj: object) {
    const usuarios: UsuarioModel[] = [];

    //* Por si no hay datos en la BBDD
    if (usuariosObj === null) {
      return [];
    }

    Object.keys(usuariosObj).forEach((key: any) => {
      const usuario: UsuarioModel = usuariosObj[key];
      usuario.id = key;

      usuarios.push(usuario);
    });

    return usuarios;
  }
}
