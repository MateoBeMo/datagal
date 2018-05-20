import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { CalendarRouting } from './calendar.routing';
import { ScheduleModule } from 'primeng/schedule';
import { DialogModule } from 'primeng/dialog';
import { FlexLayoutModule } from '@angular/flex-layout'
import { CalendarModalComponent } from './calendarModal/calendarModal.component';
import { CalendarDialogService } from '../calendar/calendar-dialog.service';
import { MomentModule } from 'angular2-moment/moment.module';


@NgModule({
  imports: [
    CommonModule,
    ScheduleModule,
    DialogModule,
    CalendarRouting,
    FlexLayoutModule,
    MomentModule
  ],
  declarations: [
    CalendarComponent,
  ],
  entryComponents: [
  ],
  providers: [
    CalendarDialogService
  ]
})
export class CalendarModule { }
