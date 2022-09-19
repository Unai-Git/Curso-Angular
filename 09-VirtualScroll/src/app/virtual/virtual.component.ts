import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css'],
})
export class VirtualComponent implements OnInit {
  //* Obtener referencia del <cdk-virtual-scroll-viewport>
  @ViewChild(CdkVirtualScrollViewport) viewport!: CdkVirtualScrollViewport;

  personas = Array(500).fill(0);

  constructor() {}

  ngOnInit(): void {
    console.log(this.personas);
  }

  irInicio() {
    this.viewport.scrollToIndex(this.personas[0]);
  }

  irCentro() {
    this.viewport.scrollToIndex(this.personas.length / 2);
  }
  
  irFinal() {
    this.viewport.scrollToIndex(this.personas.length);
  }
}
