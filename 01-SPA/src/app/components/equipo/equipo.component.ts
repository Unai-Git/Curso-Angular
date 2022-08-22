import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EquiposService } from './../../services/equipos.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css'],
})
export class EquipoComponent {
   equipo:any = {};
  constructor(private activatedRoute: ActivatedRoute, private equipos:EquiposService) {

    //Recibir el paramatro de la URL [Return Object]
    this.activatedRoute.params.subscribe( params => {
      //console.log(params['id']);
      //Guardar los datos del equipo
      this.equipo = this.equipos.getEquipo(params['id']);
      console.log(this.equipo);
    })
  }
}
