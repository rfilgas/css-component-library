import { Routes } from '@angular/router';



// const routes = [
//   {
//     component: LayoutComponent,
//     path: '',
//     children: [
//       { component: PageComponent, path: 'page' }
//     ]
//   },
//   { component: OtherPageComponent, path: 'otherpage' }
// ];

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/layout.component').then(m => m.LayoutComponent),
    children: [
      { path: 'settings', loadComponent: () => import('./pages/settings/settings.component').then(m => m.SettingsComponent) },
      { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) },
      { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
      { path: 'feature-demo', loadComponent: () => import('./pages/feature-demo/feature-demo.component').then(m => m.FeatureDemoComponent) },
      { path: 'login', loadComponent: () => import('./shared/components/auth/login/login.component').then(m => m.LoginComponent) },
      { path: 'callback', loadComponent: () => import('./shared/callback/callback.component').then(m => m.CallbackComponent) },
    ]
  }



  // { path: '',
  //   pathMatch: 'full',
  //   loadComponent: () => import('./pages/home/home.component').then(mod => mod.HomeComponent)
  // },
  // { path: 'settings',
  //   loadComponent: () => import('./pages/settings/settings.component').then(mod => mod.SettingsComponent)
  // },
  // { path: 'dashboard',
  //   loadComponent: () => import('./pages/dashboard/dashboard.component').then(mod => mod.DashboardComponent)
  // },
  // { path: 'about',
  //   loadComponent: () => import('./pages/about/about.component').then(mod => mod.AboutComponent)
  // },
  // { path: 'feature-demo',
  // loadComponent: () => import('./pages/feature-demo/feature-demo.component').then(mod => mod.FeatureDemoComponent)
  // },
  // { path: 'login',
  //   loadComponent: () => import('./shared/components/auth/login/login.component').then(mod => mod.LoginComponent)
  // },
  // { path: 'callback',
  //   loadComponent: () => import('./shared/callback/callback.component').then(mod => mod.CallbackComponent)
  // },
];


