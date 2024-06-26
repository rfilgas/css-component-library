import {CUSTOM_ELEMENTS_SCHEMA, Component, Inject, Injector} from '@angular/core';
import {CommonModule, DOCUMENT} from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'css-recipe-frontend';
  // inject dependencies here if needed.
  constructor() {

  }
}

