import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: 'pages', loadChildren: './pages/pages.module#PagesModule'},
  { path: 'login',	loadChildren: './login/login.module#LoginModule' },
 
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes,
  { useHash: false,  enableTracing: true  });
