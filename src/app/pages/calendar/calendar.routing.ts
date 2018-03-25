import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar.component';
// import { calendarCanActivate } from './calendar.guard';

const routes: Routes = [
  { path: '', component: CalendarComponent, pathMatch: 'full'},
 // { path: 'something', component: CalendarComponent },
 // { path: 'something', component: CalendarComponent} // ,  canActivate: [calendarCanActivate]

];

export const CalendarRouting: ModuleWithProviders = RouterModule.forChild(routes);
