import {
    Component,
    OnInit,
    HostBinding
} from '@angular/core';
import { BaseFormComponent } from "../../../shared/components/base-form.component";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AuthenticationService } from "../../../core/services/authentication.service";
import { AlertService } from "../../../core/services/alert.service";
import { Router } from "@angular/router";
import { apiResponse } from "../../../core/models/apiResponse";
import { ClientConfigService } from "../../../core/services/client-config.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
}

) export class LoginComponent extends BaseFormComponent implements OnInit {
    @HostBinding('class') classes = 'wrapper align-items-center justify-content-center';

    get isRightLoginLayout() {
        return this.clientConfigService.isRightLoginLayout;
    }

    get isMiddleLoginLayout() {
        return this.clientConfigService.isMiddleLoginLayout;
    }

    constructor(private fb: FormBuilder, private authenticationService: AuthenticationService,
        private alertService: AlertService, private router: Router, private clientConfigService: ClientConfigService) {
        super();
        this.buildForm();
    }

    ngOnInit() { }

    buildForm() {
        this.form = this.fb.group({
            email: new FormControl('', [Validators.email, Validators.required]),
            password: new FormControl('', [Validators.required]),
        });
    }

    onSubmit() {
        if (this.isValidForm()) {
            this.authenticationService.login(this.form.get("email").value, this.form.get("password").value)
                .subscribe((res: apiResponse) => {
                    if (res.errorMessage) {
                        this.alertService.error(res.errorMessage);
                    } else {
                        this.router.navigate(['dashboard']);
                    }
                });
        }
    }
}
