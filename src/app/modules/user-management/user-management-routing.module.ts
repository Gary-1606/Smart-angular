import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserManagementLayoutComponent } from './user-management-layout/user-management-layout.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const userManagementRoutes: Routes = [
    {
        path: '',
        component: UserManagementLayoutComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'forgot-password', component: ForgotPasswordComponent }
        ]
    }
];


@NgModule({
    imports: [
        RouterModule.forChild(userManagementRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class UserManagementRoutingModule { }
