import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { UserManagementModule } from "./modules/user-management/user-management.module";
import { LayoutModule } from "./modules/layout/layout.module";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatTabsModule,
        UserManagementModule,
        LayoutModule,
        CoreModule,
        SharedModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
