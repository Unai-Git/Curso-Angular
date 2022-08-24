import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <h5>NgStyle</h5>
    <p [style.fontSize.px]="tamanio">Tamaño del párrafo. [{{tamanio}}.px]</p>

    <button class="btn btn-success" (click)="tamanio = tamanio + 5">
      <i class="fa fa-plus"></i>
    </button>

    <button class="btn btn-danger m-2" (click)="tamanio = tamanio - 5">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: [],
})
export class NgStyleComponent implements OnInit {
  tamanio: number = 20;
  constructor() {}

  ngOnInit(): void {}
}
