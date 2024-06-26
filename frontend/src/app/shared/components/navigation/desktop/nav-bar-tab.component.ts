import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from "@angular/material/button";

@Component({
  standalone: true,
  imports: [RouterModule, MatButtonModule],
  selector: 'app-nav-bar-tab',
  template: `
    <a
      mat-button class="px-2 custom-button"
      [routerLink]="path"
      routerLinkActive="nav-bar__tab--active"
    >
      {{ label }}
    </a>
  `,
})
export class NavBarTabComponent {
  @Input() path: string | undefined;
  @Input() label: string | undefined;
}
