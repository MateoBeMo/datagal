import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRouting } from './pages.routing';
import { PagesComponent } from './pages.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { SlideMenuModule } from 'primeng/slidemenu';
import { ButtonModule } from 'primeng/button';
import { ContextMenuModule } from 'primeng/contextmenu';
import { MenubarModule } from 'primeng/menubar';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ClarityModule } from "@clr/angular";
import { SidebarModule } from 'primeng/sidebar';


@NgModule({
  imports: [
    CommonModule,
    TabMenuModule,
    SlideMenuModule,
    ButtonModule,
    FormsModule,
    MenubarModule,
    PagesRouting,
    ClarityModule,
    SidebarModule,
  ],
  declarations: [
    PagesComponent,
  ]
})
export class PagesModule { }
