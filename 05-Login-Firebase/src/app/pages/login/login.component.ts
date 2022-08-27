import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  usuario!: UsuarioModel;
  recordarme = false;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.usuario = new UsuarioModel();

    if (localStorage.getItem('email')) {
      this.usuario.email = localStorage.getItem('email');
      this.recordarme = true;
    }
  }

  login(form: NgForm) {
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

    this.auth.signIn(this.usuario).subscribe(
      (res) => {
        console.log(res);
        Swal.close();

        if (this.recordarme) {
          localStorage.setItem('email', this.usuario.email);
        } else {
          localStorage.removeItem('email');
        }

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
