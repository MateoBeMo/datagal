import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventRouting } from './event.routing';
import { TravelCreationComponent } from './event-creation/travel-creation.component';
import { ReminderCreationComponent } from './event-creation/reminder-creation.component';
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
import { SplitButtonModule } from 'primeng/splitbutton';
import { EventEditionComponent } from './event-edition/event-edition.component';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { EventModalComponent } from './eventModal/eventModal.component';
import { DialogService } from './dialog.service';


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
    ReactiveFormsModule,
    SplitButtonModule,
    MatDialogModule
  ],
  declarations: [
    EventComponent,
    TravelCreationComponent,
    ReminderCreationComponent,
    EventDetailsComponent,
    EventPartialComponent,
    EventEditionComponent,
    EventModalComponent
  ],
  entryComponents: [
    EventModalComponent,
  ], 
  providers: [
    DialogService
  ]
})
export class EventModule { }