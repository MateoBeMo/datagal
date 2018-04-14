import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { CalendarRouting } from './calendar.routing';
import { ScheduleModule } from 'primeng/schedule';
import { DialogModule } from 'primeng/dialog';
import { FlexLayoutModule } from '@angular/flex-layout'

@NgModule({
  imports: [
    CommonModule,
    ScheduleModule,
    DialogModule,
    CalendarRouting,
    FlexLayoutModule
  ],
  declarations: [
    CalendarComponent
  ]
})
export class CalendarModule { }
