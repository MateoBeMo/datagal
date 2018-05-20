import { UtilsService } from './services/utils.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from './services/event.service';
import { ToggleSidenavService } from './services/toggle-sidenav.service';
import { UsersService } from './services/users.service';
import { UrlBuilder } from './pagination/urlBuilder.helper';

@NgModule({
    declarations: [
      //Components
    ],
    imports: [
      CommonModule,
    ],
    exports: [
    ]
  })
  export class SharedModule {
    static forRoot(): ModuleWithProviders {
      return {
        ngModule: SharedModule,
        providers: [
            EventService,
            ToggleSidenavService,
            UsersService,
            UtilsService,
            UrlBuilder,
        ]
      };
    }
  }
  