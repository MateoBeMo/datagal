import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()

export class UtilsService {

    constructor() { }

    buildParams(obj: any) {
        // Build url params - Accepts 0 but not empty string
        let params = new HttpParams();
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const val = obj[key];
                if (val !== null && val !== undefined && val !== '') {
                    params = params.append(key, val.toString());
                }
            }
        }
        return params;
    }
    jwt() {
        // create authorization header with jwt
        // const token = localStorage.getItem('auth_token');
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWU2MTg0OTdkN2I5MDAwMWNjMWJiOWUiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTI1MDI4OTM3fQ.MT9b7qfbT4Fl3wM1PrpiZ9eaLrgTghb_dhypd_VrxuU';
        const headers = new HttpHeaders().set('x-auth', token);

        return headers;
    }

    get_url(path) {
        return `${environment.base_url}/${path}`;
    }

    handleError(error: any): Promise<any> {
        console.error('An error occurred', JSON.parse(error._body)); // for demo purposes only
        return Promise.reject(JSON.parse(error._body).errors);
    }
}
