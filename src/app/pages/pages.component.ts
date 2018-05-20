import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ToggleSidenavService } from '../../shared/services';
import { SidenavMode } from '../../shared/constants/custom-types';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  items: MenuItem[];

  public showSidenav: boolean;
  public currentSidenavMode: SidenavMode;
  constructor(private toggleService: ToggleSidenavService) { }
  public collapsed: boolean;
  public display: boolean;
  public sideNavLinks = [];
  public subHeaderLinks = [];

  ngOnInit() {

    this.subHeaderLinks =[
      { link: 'home', label: 'SubHome 1',},
      { link: 'about', label: 'SubHome 2',}
    ];
    this.sideNavLinks = [    
      { link: 'home', label: 'Dashboard', icon: 'home'},
      { link: 'calendar', label: 'Calendario', icon: 'calendar'},
      { link: 'event', label: 'Eventos', icon: 'event'},
      { link: 'users', label: 'Gestión de usuarios', icon: 'users'},
      { link: 'workers', label: 'Trabajadores', icon: 'id-badge'}];
    
    this.items = [
        {label: 'Calendario', icon: 'fa-calendar', routerLink: 'calendar'},
        {label: 'Eventos', icon: 'fa fa-list-alt', routerLink: 'event'},
        {label: 'Trabajadores', icon: 'fa fa-bus'},
        {label: 'Usuarios', icon: 'fa fa-users'},
        {label: 'Dietas', icon: 'fa fa-file-text-o'},
    ];
    this.toggleService.canShowSidenav()
      .subscribe((value: boolean) => {
        this.showSidenav = value;
      });

    this.toggleService.currentSidenavMode()
      .subscribe((value: SidenavMode) => {
        this.currentSidenavMode = value;
      });
  }
}
