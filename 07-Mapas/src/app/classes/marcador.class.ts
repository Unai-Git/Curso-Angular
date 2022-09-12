export class Marcador {
  constructor(
    public lat: number,
    public lng: number,
    public titulo = 'Sin Titulo',
    public desc = 'Sin Descripción'
  ) {
    this.lat = lat;
    this.lng = lng;
  }
}
