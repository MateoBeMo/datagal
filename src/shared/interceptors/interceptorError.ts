import { Injectable } from "@angular/core";
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
} from "@angular/common/http";
import { Router } from "@angular/router";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {
    constructor(private router: Router) {}

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(request).do(
            (event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                }
            },
            error => {
                if (error instanceof HttpErrorResponse) {
                    console.log(error.message);
                    if (error.status === 404) {
                        //this.router.navigate(["login"]);
                    }
                }
            }
        );
    }
}