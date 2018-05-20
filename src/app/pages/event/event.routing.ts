import { EventEditionComponent } from './event-edition/event-edition.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from './event.component';

import { EventDetailsComponent } from './event-details/event-details.component';
import { TravelCreationComponent } from './event-creation/travel-creation.component';
import { ReminderCreationComponent } from './event-creation/reminder-creation.component';
// import { calendarCanActivate } from './calendar.guard';

const routes: Routes = [
  { path: '', component: EventComponent, pathMatch: 'full', data: {title: 'Lista de Eventos'}},
  { path: 'new-travel', component: TravelCreationComponent, data: {title: 'Creación de un evento'} },
  { path: 'new-reminder', component: ReminderCreationComponent, data: {title: 'Creación de un evento'} },
  { path: ':id', component: EventDetailsComponent, data: {title: 'Detalles de un evento'} },
	{ path: 'edit/:id', component: EventEditionComponent, data: {title: 'Edición de un evento'} }
  //   canActivate: [EventDetailsCanActivate]

];

export const EventRouting: ModuleWithProviders = RouterModule.forChild(routes);