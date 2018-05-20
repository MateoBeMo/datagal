import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { SharedModule } from '../shared/shared.module';
import { ClarityModule } from "@clr/angular";
import { UnauthorizedInterceptor  } from '../shared/interceptors/interceptorError';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LayoutModule } from '@angular/cdk/layout';
import { OverlayModule } from '@angular/cdk/overlay';
import { CalendarModalComponent } from './pages/calendar/calendarModal/calendarModal.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    SharedModule.forRoot(),
    ClarityModule.forRoot(),
    HttpClientModule,
    AppRouting,
    MatDialogModule,
    LayoutModule,
    OverlayModule
    //AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedInterceptor,
      multi: true
    },
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}},
    {provide: MatDialogRef, useValue: {} },
    {provide: MAT_DIALOG_DATA, useValue: {}} // Add any data you wish to test if it is passed/used correctly}
  ],
  entryComponents: [
    CalendarModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
