import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello This is {{name}}</h1>`,
})
export class AppComponent  { name = 'Angular 2 Demo!'; }
