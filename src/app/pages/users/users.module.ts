
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

import { UsersComponent } from './users.component';
import { routing } from './users.routing';

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
    ]
})
export class UsersModule { }
