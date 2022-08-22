import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EquiposService } from '../../services/equipos.service';
import { Equipo } from '../../model/equipo.model';
@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css'],
})
export class EquiposComponent implements OnInit {
  equipos: Equipo[] = [];

  constructor(
    private equiposService: EquiposService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.equipos = this.equiposService.getEquipos();
    console.log(this.equipos);
  }
  
  //Metodo para visualizar un solo equipo pasando el parametro el index del *NgFor
  verEquipo(id: number) {
    this.router.navigate(['/equipo', id]);
  }
}
