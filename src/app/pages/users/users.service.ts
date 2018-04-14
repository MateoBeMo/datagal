import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserResponse, User } from '../../../shared/models/user';
import { UtilsService } from '../../../shared/services/utils.service';

@Injectable()
export class UsersService {
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
