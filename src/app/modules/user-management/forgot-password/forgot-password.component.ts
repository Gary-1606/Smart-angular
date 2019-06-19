import { Component, OnInit, HostBinding } from '@angular/core';
import { apiResponse } from "../../../core/models/apiResponse";
import { BaseFormComponent } from "../../../shared/components/base-form.component";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AuthenticationService } from "../../../core/services/authentication.service";
import { AlertService } from "../../../core/services/alert.service";
import { Router } from "@angular/router";
import { ClientConfigService } from "../../../core/services/client-config.service";

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent extends BaseFormComponent implements OnInit {

    get isRightLoginLayout() {
        return this.clientConfigService.isRightLoginLayout;
    }

    get isMiddleLoginLayout() {
        return this.clientConfigService.isMiddleLoginLayout;
    }

    @HostBinding('class') classes = 'wrapper align-items-center justify-content-center';
    constructor(private fb: FormBuilder, private authenticationService: AuthenticationService,
        private alertService: AlertService, private router: Router, private clientConfigService: ClientConfigService) {
        super();
        this.buildForm();
    }

    ngOnInit() {
    }

    buildForm() {
        this.form = this.fb.group({
            email: new FormControl('', [Validators.email, Validators.required])
        });
    }

    onSubmit() {
        if (this.isValidForm()) {
            this.authenticationService.forgotPassword(this.form.value.email)
                .subscribe((res: apiResponse) => {
                    if (res.errorMessage) {
                        this.alertService.error(res.errorMessage);
                    } else {
                        this.alertService.success(res.successMessage);
                    }
                });;
        }
    }
}
