import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from '../../shared/shared.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserManagementLayoutComponent } from './user-management-layout/user-management-layout.component';
import { UserManagementLeftPanelComponent } from './user-management-left-panel/user-management-left-panel.component';
import { UserManagementRoutingModule } from './user-management-routing.module';

@NgModule({
    imports: [
        CommonModule,
        UserManagementRoutingModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatCheckboxModule,
        MatButtonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ],
    declarations: [
        LoginComponent,
        UserManagementLayoutComponent,
        RegisterComponent,
        ForgotPasswordComponent,
        UserManagementLeftPanelComponent
    ]
})
export class UserManagementModule { }
