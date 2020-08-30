import { Component } from '@angular/core';

@Component({
  selector: 'root',
  template: `
    <div style="text-align:center">
    <h1>
      {{pageTitle}}
    </h1>
    <cats></cats>
    </div>
  `
})

export class AppComponent {
  pageTitle: string = 'Rent my cat'
}