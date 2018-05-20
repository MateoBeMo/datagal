import { DialogService } from './dialog.service';
import { MatDialogRef, DialogPosition } from '@angular/material/dialog';
import { Component, OnInit, ElementRef, ViewChild, ComponentRef } from '@angular/core';
import { EventService } from '../../../shared/services';
import { EventModel } from '../../../shared/models';
import { Router, ActivatedRoute } from '@angular/router';
import { ClrDatagridStateInterface } from '@clr/angular';
import { MenuItem } from 'primeng/api';
import { MatDialog } from '@angular/material';
import { EventModalComponent } from './eventModal/eventModal.component';
import { ComponentPortal, PortalInjector, } from '@angular/cdk/portal';
import { Overlay, OverlayRef, ConnectedPositionStrategy, OverlayConfig } from '@angular/cdk/overlay';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

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

    public total: number;
    public limit: number;
    public loading: boolean = true;
    public currentPage: number = 1;
    items: MenuItem[];

    selectedEvent: EventModel;

    newEvent: boolean;

    events: Array<EventModel> = [];

    cols: any[];
    display: boolean = false;
    positionLeft: number;
    positionTop: number;

    public modalConfig: any = {
        openModal: false,
    };

    @ViewChild('button') el: ElementRef;
   

    constructor(
        private eventService: EventService,
        private router: Router,
        private route: ActivatedRoute,
        private elRef: ElementRef,
        public dialog: MatDialog,
        private overlay: Overlay,
        private dialogService: DialogService
    ) { }

    ngOnInit() {
        this.items = [
            {
                label: 'Eliminar', icon: 'fa-close', command: () => {
                    this.delete();
                }
            },
        ];

        // this.eventService.getAll().subscribe(events => {
        //     this.events = events.data;
        //     this.limit = 10;
        //     this.total = events.total;
        //     this.loading = false;
        // })

        this.cols = [
            { field: 'title', header: 'Title' },
            { field: 'start', header: 'Start' },
            { field: 'end', header: 'End' },
            { field: 'description', header: 'Description' },
        ];
    }
    showDialog() {
        this.dialogService.open( this.el ).subscribe(selected => {
            this.dialogService.closeDialog();
            switch (selected) {
                case 'reminder': this.createReminder();
                    break;
                case 'travel': this.createTravel();
                    break;
            }
        });
    }
    addEvent() {
        this.router.navigate(['new'], { relativeTo: this.route });
    }

    save() {
    }

    update(item: EventModel) {
        console.log(item);
        this.router.navigate(['pages/event/edit/', item.id]);
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
    refresh(state: ClrDatagridStateInterface) {
        this.loading = true;
        // We convert the filters from an array to a map, to facilitate the access
        let filters: { [prop: string]: any[] } = {};
        if (state.filters) {
            for (let filter of state.filters) {
                let { property, value } = <{ property: string, value: string }>filter;
                filters[property] = [value];
            }
        };
        // Take just username and call server
        // this.eventService.getEvents(this.currentPage).subscribe(data => this.events = data);
    }

    onActionSelected(event: EventModel, action: string) {
        // action: new, edit or remove
        if (action === 'create') {
            this.modalConfig.openModal = true;
        } else {
        }
    }
    createTravel() {
        this.router.navigate(['pages/event/new-travel']);
    }
    createReminder() {
        this.router.navigate(['pages/event/new-reminder']);
    }
}


    // showDialog() {
    //     let dialogRef = this.dialog.open(EventModalComponent, {
    //         width: '250px',
    //         data: {},
    //         position: this.getPositionDialog()
    //     });

    //     dialogRef.afterClosed().subscribe(result => {
    //         console.log(result);
    //         switch (result) {
    //             case 'reminder': this.createReminder();
    //                 break;
    //             case 'travel': this.createTravel();
    //                 break;
    //         }
    //     });

    // }