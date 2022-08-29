import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

import { UsuarioModel } from '../../models/usuario.model';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [],
})
export class UsuarioComponent implements OnInit {
  //* Instanciar Usuario
  usuario = new UsuarioModel();

  constructor(
    private usuariosService: UsuariosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';

    if (id !== 'nuevo') {
      this.usuariosService
        .mostrarUsuarioPorID(id)
        .subscribe((res: any) => {
          this.usuario = res;
          this.usuario.id = id;
        });
    }
  }

  guardar(form: NgForm) {
    if (form.invalid) {
      console.log('Formulario no valido');
      return;
    }

    //* Alert
    Swal.fire({
      title: 'Cargando',
      icon: 'info',
      text: 'Guardando los datos',
      allowOutsideClick: false,
    });

    Swal.showLoading();

    let peticion: Observable<any>;

    //* Si existe el id, actualizo el usuario. Si no existe crea una nuevo.
    if (this.usuario.id) {
      peticion = this.usuariosService.actualizarUsuario(this.usuario);
    } else {
      peticion = this.usuariosService.crearUsuario(this.usuario);
    }

    peticion.subscribe((res) => {
      Swal.fire({
        title: this.usuario.nombre,
        icon: 'success',
        text: 'Guardado correctamente.',
        color: 'green',
      });
    });
  }
}
