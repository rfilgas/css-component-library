import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- <button class="custom-button" (click)="handleLogin()">Log In</button> -->

    <li class="px-2 custom-button" (click)="handleLogin()">Log In</li>
  `,
})
export class LoginButtonComponent {
  constructor(private auth: AuthService) {}

  handleLogin(): void {
    this.auth.loginWithRedirect({
      appState: {
        target: '/dashboard',
      },
    });
  }
}
