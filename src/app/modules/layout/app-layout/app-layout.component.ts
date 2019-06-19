import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";

@Component({
    selector: 'app-app-layout',
    templateUrl: './app-layout.component.html',
    styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {

    isQuickLinkPage = false;
    @HostBinding('class') classes = 'wrapper';
    constructor(private router: Router) {
        this.router.events.subscribe(event => {
            const navigation = event as NavigationEnd;
            if (navigation && navigation.url && navigation.url.indexOf('quick-links') != -1) {
                this.isQuickLinkPage = true;
            }
        });
    }

    ngOnInit() {
    }

}
