import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter, RouterModule, ROUTES} from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideClientHydration } from '@angular/platform-browser';

import {AuthModule, provideAuth0} from "@auth0/auth0-angular";
import { routes } from './app.routes';
import { provideHttpClient } from "@angular/common/http";
import {environment} from "../environments/environment.js";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
      provideRouter(routes),
      provideAnimations(),
      provideClientHydration(),
      provideHttpClient(),
      importProvidersFrom(
        AuthModule.forRoot({
      ...environment.auth0
        })), provideAnimationsAsync('noop'),
  ]
};
