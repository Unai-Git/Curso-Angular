import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  //* Obtener novedades
  getNewReleases() {
    //* Pasar el token por el Header
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQC7i70W_G02nnMq3Ua6nXX0WHYB7KrXhAECMoxCA7pM7nhcbW-f6VnLzI4xqqh26ew0C_vQ_OScvT05t-T8E1W6IE5ntaqPOT559Z9nTvzIdoZxqhs',
    });

    //* Petición HTTp
    return this.http
      .get('https://api.spotify.com/v1/browse/new-releases', {
        headers,
      })
      .pipe(
        map((data: any) => {
          return data.albums.items;
        })
      );
  }

  //* Buscar artista
  getArtistas(termino: string) {
    //* Pasar el token por el Header
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQC7i70W_G02nnMq3Ua6nXX0WHYB7KrXhAECMoxCA7pM7nhcbW-f6VnLzI4xqqh26ew0C_vQ_OScvT05t-T8E1W6IE5ntaqPOT559Z9nTvzIdoZxqhs',
    });

    //* Petición HTTp
    return this.http
      .get(
        `https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,
        {
          headers,
        }
      )
      .pipe(
        map((data: any) => {
          return data.artists.items;
        })
      );
  }

  //* Buscar artista
  getArtista(id: string) {
    //* Pasar el token por el Header
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQC7i70W_G02nnMq3Ua6nXX0WHYB7KrXhAECMoxCA7pM7nhcbW-f6VnLzI4xqqh26ew0C_vQ_OScvT05t-T8E1W6IE5ntaqPOT559Z9nTvzIdoZxqhs',
    });

    //* Petición HTTp
    return this.http.get(`https://api.spotify.com/v1/artists/${id}`, {
      headers,
    });
  }

  //* Top canciones
  getTopTracks(id: string) {
    //* Pasar el token por el Header
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQC7i70W_G02nnMq3Ua6nXX0WHYB7KrXhAECMoxCA7pM7nhcbW-f6VnLzI4xqqh26ew0C_vQ_OScvT05t-T8E1W6IE5ntaqPOT559Z9nTvzIdoZxqhs',
    });

    //* Petición HTTp
    return this.http
      .get(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=us`, {
        headers,
      })
      .pipe(
        map((data: any) => {
          return data.tracks;
        })
      );
  }
}
