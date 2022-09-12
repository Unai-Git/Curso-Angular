import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
})
export class MapaComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;

  durationInSeconds = 4;

  marcadores: Marcador[] = [];

  constructor(public snackBar: MatSnackBar) {
    if (localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores')!);
    }
  }

  openSnackBar() {
    this.snackBar.openFromComponent(MapaComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  agregarMarcador(evento: any) {
    const coords: { lat: number; lng: number } = evento.coords;
    const marcador = new Marcador(coords.lat, coords.lng);

    this.marcadores.push(marcador);

    this.guardarStorage();

    this.snackBar.open('Marcador agregado', 'Cerrar');
  }

  guardarStorage() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  borrarMarcador(i: number) {
    this.marcadores.splice(i, 1);
    this.guardarStorage();
    this.snackBar.open('Marcador eliminado', 'Cerrar');
  }

  ngOnInit(): void {}
}
