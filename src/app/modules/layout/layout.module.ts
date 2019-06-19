import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { LayoutRoutingModule } from "./layout-routing.module";
import { QuicklinksGatewayComponent } from "./quicklinks-gateway/quicklinks-gateway.component";
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        LayoutRoutingModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatCheckboxModule,
        MatButtonModule,
        ReactiveFormsModule,
        SharedModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        NavigationComponent,
        AppLayoutComponent,
        DashboardComponent,
        QuicklinksGatewayComponent
    ]
})
export class LayoutModule { }
