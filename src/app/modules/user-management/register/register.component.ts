import { Component, OnInit, HostBinding } from '@angular/core';
import { BaseFormComponent } from "../../../shared/components/base-form.component";
import { AuthenticationService } from "../../../core/services/authentication.service";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { PasswordValidator } from "../../../core/validators/password.validator";
import { Router } from "@angular/router";
import { apiResponse } from "../../../core/models/apiResponse";
import { AlertService } from "../../../core/services/alert.service";
import { ClientConfigService } from "../../../core/services/client-config.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent extends BaseFormComponent implements OnInit {
    
    get isRightLoginLayout() {
        return this.clientConfigService.isRightLoginLayout;
    }

    get isMiddleLoginLayout() {
        return this.clientConfigService.isMiddleLoginLayout;
    }

    @HostBinding('class') classes = 'wrapper align-items-center justify-content-center';
    constructor(private fb: FormBuilder, private authenticationService: AuthenticationService,
        private router: Router, private alertService: AlertService, private clientConfigService: ClientConfigService) {
        super();
        this.buildForm();
    }
    buildForm() {
        this.form = this.fb.group({
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, PasswordValidator]),
            comformPassword: new FormControl('', [Validators.required, PasswordValidator]),
            termsConditions: new FormControl('', [Validators.required])
        });
    }

    ngOnInit() {

    }

    onSubmit() {
        if (this.isValidForm()) {
            this.authenticationService.register(this.form.value)
                .subscribe((res: apiResponse) => {
                    if (res.errorMessage) {
                        this.alertService.error(res.errorMessage);
                    } else {
                        this.router.navigate(['register-success']);
                    }
                });;
        }
    }
}
