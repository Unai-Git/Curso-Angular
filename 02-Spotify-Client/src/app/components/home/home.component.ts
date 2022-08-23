import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//* Importar Service
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  //* Propiedades
  countries: any[] = [];
  nuevasCanciones: any[] = [];

  constructor(private spotify: SpotifyService) {
    //* Obtener novedades
    this.spotify.getNewReleases().subscribe((data: any) => {
      this.nuevasCanciones = data;
    });

    /*
    //* Realizar petición http a restcountries
    this.http
      .get('https://restcountries.com/v2/lang/es')
      .subscribe((data: any) => {
        this.countries = data;
      });
    */
  }

  ngOnInit(): void {}
}
