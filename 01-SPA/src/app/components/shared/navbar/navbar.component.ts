import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Equipo } from './../../../model/equipo.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  buscarEquipo(texto: string) {
    this.router.navigate(['/buscar',texto]);
  }
}
