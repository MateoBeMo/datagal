import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { SidenavMode } from '../constants/custom-types';

@Injectable()
export class ToggleSidenavService {


  private _showSidenav: boolean;
  private _sidenavMode: SidenavMode;

  private showSidenavSubject: BehaviorSubject<boolean>;
  private sidenavModeSubject: BehaviorSubject<string>;

  constructor() {
    this._showSidenav = window.innerWidth <= 980;
    this._sidenavMode = window.innerWidth > 980 ? 'over' : 'side';
    this.showSidenavSubject = new BehaviorSubject<boolean>(this._showSidenav);
    this.sidenavModeSubject = new BehaviorSubject<string>(this._sidenavMode);
  }

  canShowSidenav(): Observable<boolean> {
    return this.showSidenavSubject.asObservable();
  }

  currentSidenavMode(): Observable<string> {
    return this.sidenavModeSubject.asObservable();
  }

  toggleSidenav(): void {
    this._showSidenav = !this._showSidenav;
    this.showSidenavSubject.next(this._showSidenav);
  }

  showSidenav(): void {
    this._showSidenav = true;
    this.showSidenavSubject.next(this._showSidenav);
  }

  hideSidenav(): void {
    this._showSidenav = false;
    this.showSidenavSubject.next(this._showSidenav);
  }

  changeToOverMode(): void {
    this._sidenavMode = 'over';
    this.sidenavModeSubject.next(this._sidenavMode);
  }

  changeToSideMode(): void {
    this._sidenavMode = 'side';
    this.sidenavModeSubject.next(this._sidenavMode);
  }

}

