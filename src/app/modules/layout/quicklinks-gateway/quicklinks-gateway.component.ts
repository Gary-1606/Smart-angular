import { Component, OnInit, HostBinding } from '@angular/core';
import { ConfigService } from "../../../core/services/configs.service";

@Component({
    selector: 'app-quicklinks-gateway',
    templateUrl: './quicklinks-gateway.component.html',
    styleUrls: ['./quicklinks-gateway.component.scss']
})
export class QuicklinksGatewayComponent implements OnInit {

    @HostBinding('class') classes = 'wrapper';

    get quickLinks() {
        return this.configService.getQuickLinks;
    }

    constructor(private configService: ConfigService) { }

    ngOnInit() {
    }

}
