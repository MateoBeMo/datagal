import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
    { path: '', component: PagesComponent, children: [
        { path: '', redirectTo: 'calendar', pathMatch: 'full' },
        { path: 'calendar',	loadChildren: './calendar/calendar.module#CalendarModule' },
        { path: 'event',	loadChildren: './event/event.module#EventModule' },
        { path: 'users',	loadChildren: './users/users.module#UsersModule' },
    ]}
];

export const PagesRouting: ModuleWithProviders = RouterModule.forChild(routes);