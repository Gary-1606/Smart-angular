import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

import { AlertComponent } from './components/alert/alert.component';
import { FieldErrorDisplyComponent } from './components/field-error-disply/field-error-disply.component';


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule
    ],
    declarations: [
        AlertComponent,
        FieldErrorDisplyComponent
    ],
    exports: [
        AlertComponent,
        FieldErrorDisplyComponent
    ]
})
export class SharedModule { }
