import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {

  constructor(
    private _router: Router,
    private _notificationsSrc: NotificationsService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpErrorResponse && event.status === 401) {
        this._notificationsSrc.warn('Unauthorized');
        this._router.navigate(['/login']);
      }
    });

  }
}
