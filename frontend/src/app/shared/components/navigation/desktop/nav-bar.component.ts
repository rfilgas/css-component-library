import { Component } from '@angular/core';
import { NavBarBrandComponent } from './nav-bar-brand.component';
import { NavBarButtonsComponent } from './nav-bar-buttons.component';
import { NavBarTabsComponent } from './nav-bar-tabs.component';
import { NavBarTabComponent } from "./nav-bar-tab.component";

@Component({
    standalone: true,
    selector: 'app-nav-bar',
    styleUrl: './nav-bar.component.scss',
    template: `
<nav class="navbar">
  <div class="logo">A</div>
  <div class="menu-icon" (click)="toggleMenu()">&#9776;</div>
  <ul class="dropdown-menu" [class.active]="menuOpen">
  <!-- <app-nav-bar-tab path="/dashboard" label="Dashboard"></app-nav-bar-tab>
  <app-nav-bar-tab path="/about" label="About"></app-nav-bar-tab>
  <app-nav-bar-tab path="/settings" label="Settings"></app-nav-bar-tab>
  <app-nav-bar-tab path="/feature-demo" label="Feature-Demo"></app-nav-bar-tab> -->
  <app-nav-bar-tabs></app-nav-bar-tabs>
  <!-- <app-nav-bar-buttons></app-nav-bar-buttons> -->
  </ul>
</nav>
  `,
    imports: [NavBarBrandComponent, NavBarTabsComponent, NavBarButtonsComponent, NavBarTabComponent]
})
export class NavBarComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}


// standalone: true,
// imports: [NavBarBrandComponent, NavBarTabsComponent, NavBarButtonsComponent],
// selector: 'app-nav-bar',
// styleUrl: './nav-bar.component.scss',
// template: `
//   <div class="nav-bar__container">
//     <nav class="nav-bar">
//       <app-nav-bar-brand></app-nav-bar-brand>
//       <app-nav-bar-tabs></app-nav-bar-tabs>
//       <app-nav-bar-buttons></app-nav-bar-buttons>
//     </nav>
//   </div>
// `,

