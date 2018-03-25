import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { CalendarRouting } from './calendar.routing';
import { ScheduleModule } from 'primeng/schedule';

@NgModule({
  imports: [
    CommonModule,
    ScheduleModule,
    CalendarRouting
  ],
  declarations: [
    CalendarComponent
  ]
})
export class CalendarModule { }
