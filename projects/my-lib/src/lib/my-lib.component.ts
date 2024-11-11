import { Component } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  template: `
    <div class="lib-container">
      <h2>{{ title }}</h2>
      <p>This is a reusable library component!</p>
    </div>
  `,
  styles: [`
    .lib-container {
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin: 20px;
    }
  `]
})
export class MyLibComponent {
  title = 'My Library Component';
}