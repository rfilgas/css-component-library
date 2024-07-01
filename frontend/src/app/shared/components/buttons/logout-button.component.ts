import { Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-logout-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- <button class="custom-button" (click)="handleLogout()">Log Out</button> -->
    <li class="px-2 custom-button" (click)="handleLogout()">Log Out</li>
  `
})
export class LogoutButtonComponent {

  constructor(
    private auth: AuthService,
    @Inject(DOCUMENT) private doc: Document,
  ) {}

  handleLogout(): void {
    this.auth.logout({
      logoutParams: {
        returnTo: this.doc.location.origin,
      },
    });
  }
}
