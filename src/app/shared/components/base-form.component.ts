import { FormGroup, FormControl } from "@angular/forms";

export class BaseFormComponent {
    form: FormGroup;

    private triggerFieldError(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.triggerFieldError(control);
            }
        });
    }

    isValidForm() {
        if (this.form.invalid) {
            this.triggerFieldError(this.form);
        }
        return this.form.valid;
    }

    isFieldValid(fieldName: string) {
        const field = this.form.get(fieldName);
        if (field && field.invalid && (field.dirty || field.touched))
            return field.errors;
        return null;
    }
}