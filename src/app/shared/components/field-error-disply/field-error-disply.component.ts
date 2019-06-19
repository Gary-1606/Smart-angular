import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
    selector: 'app-field-error-disply',
    templateUrl: './field-error-disply.component.html',
    styleUrls: ['./field-error-disply.component.scss']
})

export class FieldErrorDisplyComponent implements OnInit {

    @Input() errors: ValidationErrors;
    @Input() fieldLabelText: string;
    @HostBinding('class') classes = 'input-error';

    constructor() { }

    ngOnInit() {
    }

    get getErrorMsg() {
        if (this.errors.required) {
            return `${this.fieldLabelText} is required`;
        } else if (this.errors.email) {
            return `${this.fieldLabelText} is not valid`;
        }
        else if (this.errors.password) {
            const password = this.errors.password;
            if (password.minLength) {
                return `${this.fieldLabelText} minimum ${password.minLengthRequired} char are required`;
            } else if (password.maxLength) {
                return `${this.fieldLabelText} maximum ${password.maxLengthRequired} char are required`;
            }
        }
        return null;
    }
}
