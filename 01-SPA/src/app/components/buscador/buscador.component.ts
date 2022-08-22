import { Equipo } from './../../model/equipo.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EquiposService } from './../../services/equipos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent implements OnInit {

  equipos:Equipo[] = [];
  texto:string = '';
  idx:number = 0;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private equipoService: EquiposService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.texto = params['texto'];
      this.equipos = this.equipoService.buscarEquipo(params['texto']);
    });
  }
  
  //Metodo para visualizar un solo equipo pasando el parametro el index del *NgFor
  verEquipo(idx:number) {
    this.activatedRoute.params.subscribe((params) => {
      this.texto = params['texto'];
      this.equipos = this.equipoService.buscarEquipo(params['texto']);
      console.log('id'+this.equipos[idx].id);
    });
    this.router.navigate(['/equipo', this.equipos[idx].id - 1]);
  }
  
}
