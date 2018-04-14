import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventService } from '../../../shared/services';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  events: any ;
  header: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private eventService: EventService
) { }

  ngOnInit() {
  //   this.events = [
  //     {
  //       id: 1,
  //       title: 'All Day Event',
  //       start: '2018-03-01'
  //     },
  //     {
  //       id: 2,
  //       title: 'Long Event',
  //       start: '2018-01-07',
  //       end: '2018-03-10'
  //     },
  //     {
  //       id: 3,
  //       title: 'Repeating Event',
  //       start: '2018-03-09T16:00:00'
  //     },
  //     {
  //       id: 4,
  //       title: 'Repeating Event',
  //       start: '2018-03-16T16:00:00'
  //     },
  //     {
  //       id: 5,
  //       title: 'Conference',
  //       start: '2018-03-11',
  //       end: '2018-03-13'
  //     },
  //     {
  //       id: 6,
  //       title: 'Prueba',
  //       start: '2018-04-01T16:00:00',
  //       end: '2018-04-01T17:00:00'
  //   }
  // ];
  this.eventService.getAll().subscribe( events => {
    this.events = events;
  })
  this.header = {
    left: 'prev,next today',
    center: 'title',
    right: 'month,agendaWeek,agendaDay'
};
  }
  handleEventClick(event: any) {
      // console.log(event.calEvent.id);
      console.log(event);
      this.router.navigate(['pages/event', event.calEvent.id]);
  }

}
