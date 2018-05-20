import { CalendarDialogService } from './../calendar/calendar-dialog.service';
import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventService, ToggleSidenavService } from '../../../shared/services';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  events: any ;
  header: any;
  innerHeight: any;
  isOpened = false;
  dateSelected: Date;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private eventService: EventService,
    private dialogService: CalendarDialogService, 
    private elRef: ElementRef
) {
 }

  ngOnInit() {
    // height of screen less header height and margin
    this.innerHeight = (window.screen.height) - 160;
    this.eventService.getAll().subscribe( events => {
      this.events = events;
      // console.log(this.events[1].start);
      // console.log(this.events[1].end);
      // const aparcao = this.getDates(new Date (this.events[1].start), new Date(this.events[1].end));
      // console.log(aparcao);
      })
    this.header = {
      left: 'prev,next',
      center: 'title',
      right: 'today,month,agendaWeek,agendaDay'
    };
  }
  handleEventClick(event: any) {
      // console.log(event.calEvent.id);
      console.log(event);
      // this.router.navigate(['pages/event', event.calEvent.id]);
  }
  handleDayClick(day: any) {
    // console.log(day);
    this.dateSelected = day.date._d;
    const searchDate = new Date(this.dateSelected).toISOString().split('T')[0];
    // console.log(searchDate);
    this.eventService.findByDate(searchDate).subscribe( events => {
      this.dialogService.open(this.elRef, searchDate, events ).subscribe( selected => {
      });
    });
    this.elRef.nativeElement = day.jsEvent.target;
   
  }

  getDates(startDate, endDate) {
    const dateArray = [];
    let currentDate = moment(startDate);
    const stopDate = moment(endDate);
    while (currentDate <= stopDate) {
        dateArray.push( moment(currentDate).format('YYYY-MM-DD') )
        currentDate = moment(currentDate).add(1, 'days');
    }
    return dateArray;
}

}
