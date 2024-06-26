import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home.component').then(mod => mod.HomeComponent)
  },
  { path: 'settings',
    loadComponent: () => import('./pages/settings/settings.component').then(mod => mod.SettingsComponent)
  },
  { path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then(mod => mod.DashboardComponent)
  },
  { path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(mod => mod.AboutComponent)
  },
  { path: 'feature-demo',
  loadComponent: () => import('./pages/feature-demo/feature-demo.component').then(mod => mod.FeatureDemoComponent)
  },
  { path: 'login',
    loadComponent: () => import('./shared/components/auth/login/login.component').then(mod => mod.LoginComponent)
  },
  { path: 'callback',
    loadComponent: () => import('./shared/callback/callback.component').then(mod => mod.CallbackComponent)
  },
];
