import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <h5>Scope css</h5>
    <p>Párrafo desde typescript</p>
  `,
  styles: [
    `
      p {
        color: red;
        font-size: 20px;
      }
    `,
  ],
})
export class CssComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
