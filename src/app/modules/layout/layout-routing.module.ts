
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppLayoutComponent } from "./app-layout/app-layout.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthGuard } from "../../core/guards/auth.guard";
import { QuicklinksGatewayComponent } from "./quicklinks-gateway/quicklinks-gateway.component";

const layoutRoutes: Routes = [{
    path: '',
    component: AppLayoutComponent,
    canActivate: [AuthGuard],
    children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'quick-links', component: QuicklinksGatewayComponent }
    ]
}];

@NgModule({
    imports: [
        RouterModule.forChild(layoutRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class LayoutRoutingModule { }