import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from './event.component';
import { EventCreationComponent } from './event-creation/event-creation.component';
import { EventDetailsComponent } from './event-details/event-details.component';
// import { calendarCanActivate } from './calendar.guard';

const routes: Routes = [
  { path: '', component: EventComponent, pathMatch: 'full', data: {title: 'Lista de Eventos'}},
	{ path: 'new', component: EventCreationComponent, data: {title: 'Creación de un evento'} },
	{ path: ':id', component: EventDetailsComponent, data: {title: 'Edición de un evento'} }
  //   canActivate: [EventDetailsCanActivate]

];

export const EventRouting: ModuleWithProviders = RouterModule.forChild(routes);