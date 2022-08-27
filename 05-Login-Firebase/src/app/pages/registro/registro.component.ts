import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [],
})
export class RegistroComponent implements OnInit {
  //*  Instanciar modelo Usuario
  usuario!: UsuarioModel;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.usuario = new UsuarioModel();
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    //* Loading
    Swal.fire({
      allowOutsideClick: false,
      title: 'Cargando',
      icon: 'info',
      text: 'Espere por favor...',
    });

    Swal.showLoading();

    //* Llamar al servicio auth
    this.auth.signUp(this.usuario).subscribe(
      (res) => {
        console.log(res);
        Swal.close();

        this.router.navigateByUrl('/home');
      },
      (err) => {
        Swal.fire({
          allowOutsideClick: false,
          title: 'Error al autenticar',
          icon: 'error',
          text: err.error.error.message,
        });
      }
    );
  }
}
