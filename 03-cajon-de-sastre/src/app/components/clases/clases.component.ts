import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
})
export class ClasesComponent implements OnInit {
  alerta: string = 'alert-success';

  propiedades: Propiedades = {
    danger: true,
  };

  loading: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  guardar() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}

interface Propiedades {
  danger: boolean;
}
