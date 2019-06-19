import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
    selector: 'app-user-management-left-panel',
    templateUrl: './user-management-left-panel.component.html',
    styleUrls: ['./user-management-left-panel.component.scss']
})
export class UserManagementLeftPanelComponent implements OnInit {

    @HostBinding('class') classes = 'login-left-panel flex-md-grow-1 flex-grow-0 p-4';

    constructor() { }

    ngOnInit() {
    }

}
