import { Component } from '@angular/core';

@Component({
  selector: 'exp-root',
  template: `
    <h1>App Component</h1>
    <div>
      <a routerLink="/">Home</a>&nbsp;|&nbsp;
      <a routerLink="/external">External</a></div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {}
