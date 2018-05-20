import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-event-dialog',
  templateUrl: 'eventModal.component.html',
})
export class EventModalComponent {
  close: EventEmitter<any> = new EventEmitter();
  constructor(){}
    clicked(selected: string){
      this.close.emit(selected);
    }
}
