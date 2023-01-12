import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UntypedFormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        MatMenuModule,
        MatSidenavModule,
        FormsModule,
        MatIconModule,
        ReactiveFormsModule,
        MatSelectModule
    ],
    exports: [
        CommonModule,
        MatSidenavModule,
        FormsModule,
        MatIconModule,
        ReactiveFormsModule,
        MatSelectModule
    ],
    providers: [
        UntypedFormBuilder
    ]
})

export class SharedModule {
    constructor() {
    }
}