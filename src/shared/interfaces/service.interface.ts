import { Observable } from 'rxjs/observable';
import { PageDescriptor } from '../pagination/pageDescriptor.model';
import { EnvelopeResponse } from '../pagination/envelopeResponse.interface';

export interface Service<T> {
	getItem(id: string): Observable<T>;
	getAll(pageDescriptor?: PageDescriptor):  Observable<EnvelopeResponse<T>>;
    exists(id: string): Promise<boolean>;
	save(item: T): Observable<T>;
    update(item: T, id: string): Observable<T>;
    delete(id: string): Observable<T>;
}
