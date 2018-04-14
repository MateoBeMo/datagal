import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../shared/services';
import { EventModel } from '../../../shared/models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  displayDialog: boolean;

  Event: any = {
    title: '',
    start: '',
    end: '',
    description: ''
  };

  selectedEvent: EventModel;

  newEvent: boolean;

  events: Array<EventModel> = [];

  cols: any[];

  constructor(
    private eventService: EventService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
      this.eventService.getAll().subscribe( events => {
        this.events = events; 
      })
      console.log(this.events);

      this.cols = [
        { field: 'title', header: 'Title' },
        { field: 'start', header: 'Start' },
        { field: 'end', header: 'End' },
        { field: 'description', header: 'Description' },
    ];
  }

  addEvent() {
      this.router.navigate(['new'] , { relativeTo: this.route });
  }

  save() {
    //   let events = [...this.events];
    //   if (this.newEvent)
    //       events.push(this.Event);
    //   else
    //       events[this.events.indexOf(this.selectedEvent)] = this.Event;

    //   this.events = events;
    //   this.Event = null;
    //   this.displayDialog = false;
  }

  delete() {
      let index = this.events.indexOf(this.selectedEvent);
      this.events = this.events.filter((val, i) => i != index);
      this.Event = null;
      this.displayDialog = false;
  }

  onRowSelect(event) {
      this.newEvent = false;
      this.Event = this.cloneEvent(event.data);
      this.displayDialog = true;
  }

  cloneEvent(c: any): any {
      let Event = {
        title: '',
        start: '',
        end: '',
        description: ''
      };
      for (let prop in c) {
          Event[prop] = c[prop];
      }
      return Event;
  }
}