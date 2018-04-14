import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from './services/event.service';
import { ToggleSidenavService } from './services/toggle-sidenav.service';

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
            ToggleSidenavService
        ]
      };
    }
  }
  