import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { EventModel } from '../models/event.model'
import { environment } from '../../environments/environment';
import { EnvelopeResponse } from '../pagination/envelopeResponse.interface';
import { PageDescriptor } from '../pagination/pageDescriptor.model';
import { UrlBuilder } from '../pagination/urlBuilder.helper';
import { Service } from '../interfaces/service.interface';



@Injectable()
export class EventService  implements Service<EventModel> {
    hostUrl = environment.base_url;
    
    constructor(private http: HttpClient) {}

    getItem(id: string): Observable<EventModel> {
        throw new Error('Method not implemented.');
    }
    getAll(pageDescriptor?: PageDescriptor): Observable<EventModel[]> {
        return this.http.get<EventModel[]>(`${this.hostUrl}/event`);
    }
    exists(id: string): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
	save(item: EventModel): Observable<EventModel> {
        throw new Error('Method not implemented.');
    }
    update(item: EventModel, id: string): Observable<EventModel> {
        throw new Error('Method not implemented.');
    }
    delete(id: string): Observable<EventModel> {
        throw new Error('Method not implemented.');
    }

   
}