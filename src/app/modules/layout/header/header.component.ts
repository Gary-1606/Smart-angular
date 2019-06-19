import { Component, OnInit, HostListener } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    userProfile = false;

    constructor() { }

    ngOnInit() {
    }
    userProfilePopup(event) {
        this.userProfile = !this.userProfile;
        event.stopPropagation();
    }

    @HostListener('document:click', ['$event'])
    hideUserProfile() {
        this.userProfile = false;
    }
}
