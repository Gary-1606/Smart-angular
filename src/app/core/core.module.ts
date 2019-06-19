import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from "./guards/auth.guard";
import { ConfigService } from "./services/configs.service";
import { AlertService } from "./services/alert.service";
import { AuthenticationService } from "./services/authentication.service";
import { ClientConfigService } from "./services/client-config.service";


@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
    ],
    providers: [
        AuthGuard,
        ConfigService,
        AlertService,
        AuthenticationService,
        ClientConfigService
    ],
    exports: []
})

export class CoreModule { }
