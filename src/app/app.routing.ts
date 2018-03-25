import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'calendar',	loadChildren: './pages/calendar/calendar.module#CalendarModule' },
  { path: '', redirectTo: '/calendar', pathMatch: 'full' },
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes,
  { useHash: false,  enableTracing: true  });
