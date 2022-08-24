import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]',
})
export class ResaltadoDirective {
  //* Recoger parámetro
  @Input('appResaltado') nuevoColor?: string;

  constructor(private elementRef: ElementRef) {
    //elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

  //* Escuchar eventos
  @HostListener('mouseenter') mouseIn() {
    this.elementRef.nativeElement.style.backgroundColor = this.nuevoColor;
  }

  @HostListener('mouseleave') mouseOut() {
    this.elementRef.nativeElement.style.backgroundColor = null;
  }
}
