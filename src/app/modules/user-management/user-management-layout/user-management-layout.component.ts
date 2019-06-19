import { Component, OnInit, HostBinding } from '@angular/core';
import { ClientConfigService } from "../../../core/services/client-config.service";

@Component({
    selector: 'app-user-management-layout',
    templateUrl: './user-management-layout.component.html',
    styleUrls: ['./user-management-layout.component.scss']
})
export class UserManagementLayoutComponent implements OnInit {

    @HostBinding('class') classes = 'wrapper';

    get isRightLoginLayout() {
        return this.clientConfigService.isRightLoginLayout
    }

    constructor(private clientConfigService: ClientConfigService) { }

    ngOnInit() {
    }

}
