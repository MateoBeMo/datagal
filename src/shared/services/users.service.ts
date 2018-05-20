import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserResponse, User } from '../models/user';
import { UtilsService } from './utils.service';
import { Service } from '../interfaces/service.interface';
import { PageDescriptor } from '../pagination/pageDescriptor.model';
import { environment } from '../../environments/environment';
import { EnvelopeResponse } from '../pagination/envelopeResponse.interface';
import { UrlBuilder } from '../pagination/urlBuilder.helper';

@Injectable()
export class UsersService implements Service<User> {

    hostUrl = environment.base_url;

    constructor(private http: HttpClient, private utils: UtilsService, private urlBuilder: UrlBuilder) { }

    getItem(id: string): Observable<User> {
        throw new Error("Method not implemented.");
    }
    getUsers(username: string, page: number): Observable<EnvelopeResponse<User>> {
        const buildParams = {username, page};
        return this.http.get<EnvelopeResponse<User>>(`${this.hostUrl}/user?`, {
            params: this.utils.buildParams(buildParams),
            headers: this.utils.jwt()
        });
    }
    getAll(pageDescriptor?: PageDescriptor):  Observable<EnvelopeResponse<User>> {
        const urlParameters = this.urlBuilder.getUrlParameters(pageDescriptor);
        return this.http.get<EnvelopeResponse<User>>(`${this.hostUrl}/user?${urlParameters}`);
        // throw new Error("Method not implemented.");
    }
    exists(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    save(item: User): Observable<User> {
        throw new Error("Method not implemented.");
    }
    update(item: User, id: string): Observable<User> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Observable<User> {
        throw new Error("Method not implemented.");
    }
     // private path = 'user';
    // constructor(private http: HttpClient, private utils: UtilsService) { }

    // getUsers(username: string, pageNumber: number): Observable<UserResponse> {
    //     const buildParams = {username, pageNumber};
    //     return this.http.get<UserResponse>(`${this.utils.get_url(this.path)}`, {
    //         params: this.utils.buildParams(buildParams),
    //         headers: this.utils.jwt()
    //     });
    // }

    // insertUsers(user: User): Observable<User> {
    //     return this.http.post<User>(`${this.utils.get_url(this.path)}`, user, {headers: this.utils.jwt()});
    // }
    // editUsers(user: User): Observable<User> {
    //     return this.http.patch<User>(`${this.utils.get_url(this.path)}/${user.username}`, user, {headers: this.utils.jwt()});
    // }
    // deleteUsers(username: string): Observable<User> {
    //     return this.http.delete<User>(`${this.utils.get_url(this.path)}/${username}`, {headers: this.utils.jwt()});
    // }

}
