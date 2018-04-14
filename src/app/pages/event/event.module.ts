import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventRouting } from './event.routing';
import { EventCreationComponent } from './event-creation/event-creation.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventPartialComponent } from './event-partial/event-partial.component';
import { EventComponent } from './event.component';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ClarityModule } from "@clr/angular";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    AutoCompleteModule,
    TableModule,
    DialogModule,
    EventRouting,
    CalendarModule,
    ClarityModule,
    ReactiveFormsModule
  ],
  declarations: [
    EventComponent,
    EventCreationComponent,
    EventDetailsComponent,
    EventPartialComponent

  ]
})
export class EventModule { }