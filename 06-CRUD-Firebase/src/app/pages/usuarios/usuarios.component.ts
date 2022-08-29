import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

import { UsuariosService } from '../../services/usuarios.service';
import { UsuarioModel } from '../../models/usuario.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [],
})
export class UsuariosComponent implements OnInit {
  usuarios: UsuarioModel[] = [];
  cargando: boolean = false;

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.cargando = true;

    this.usuariosService.mostrarUsuarios().subscribe((res) => {
      this.usuarios = res;
      this.cargando = false;
    });
  }

  eliminarUsuario(usuario: UsuarioModel, index: number) {
    //* Feedback-Alert
    Swal.fire({
      title: '¿Esta segur de que desea eliminarlo?',
      text: `Se eliminara toda la información del usuario ${usuario.nombre}`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true,
    }).then((res) => {
      if (res.value) {
        //* Eliminar del array
        this.usuarios.splice(index, 1);

        //* Eliminar de firebase
        this.usuariosService.eliminarUsuarioPorID(usuario.id).subscribe();
      }
    });
  }
}
