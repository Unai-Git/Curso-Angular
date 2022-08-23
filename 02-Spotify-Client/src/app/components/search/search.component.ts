import { Component, OnInit } from '@angular/core';

//* Importar Service
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  artistas: any[] = [];
  constructor(private spotify: SpotifyService) {}

  buscar(termino: string) {
    this.spotify.getArtistas(termino).subscribe((data: any) => {
      console.log(data);
      this.artistas = data;
    });
  }
}
