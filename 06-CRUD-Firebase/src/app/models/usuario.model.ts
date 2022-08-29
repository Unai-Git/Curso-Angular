//* Clase Model de Usuario

export class UsuarioModel {
  //* Propiedades
  id?: string;
  nombre!: string;
  tel!: string;
  email!: string;
  estado!: boolean;

  //* Constructor
  constructor() {
    this.estado = true;
  }
}
