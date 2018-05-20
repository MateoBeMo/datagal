import { Component, OnInit, EventEmitter, Inject, InjectionToken } from '@angular/core';
import { CONTAINER_DATA } from '../calendar-inyection.token';


@Component({
  selector: 'app-calendarModal',
  templateUrl: './calendarModal.component.html',
  styleUrls: ['./calendarModal.component.scss']
})
export class CalendarModalComponent implements OnInit {

  close : EventEmitter<any> = new EventEmitter<any>();
  events: any[];

  
  constructor( @Inject(CONTAINER_DATA) public componentData: any) {
   }

  ngOnInit() {
    this.events = this.componentData.events;
    console.log(this.componentData);
  }
  
  clicked(selected: string){
    this.close.emit(selected);
  }
  
}
