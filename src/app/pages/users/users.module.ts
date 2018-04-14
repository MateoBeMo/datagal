
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

import { UsersComponent } from './users.component';
import { routing } from './users.routing';
import { UsersService } from './users.service';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        routing,
        ClarityModule
    ],
    declarations: [
        UsersComponent
    ],
    providers: [
        UsersService
    ]
})
export class UsersModule { }
