import {CUSTOM_ELEMENTS_SCHEMA, Component, Inject, Injector} from '@angular/core';
import {CommonModule, DOCUMENT} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NavBarButtonsComponent, NavBarComponent, NavBarTabComponent} from "@/app/shared/components/navigation/index.js";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavBarTabComponent,
    NavBarButtonsComponent,
    NavBarComponent
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

