import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthModule, AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private auth: AuthService) {}

  login(): void {
    this.auth.loginWithRedirect({
      appState: {
        target: '/dashboard',
      },
    });
  }

}
