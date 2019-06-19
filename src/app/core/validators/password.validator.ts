import { AbstractControl } from "@angular/forms";

export function PasswordValidator(control: AbstractControl) {
    const minLengthRequired = 6;
    const maxLengthRequired = 12;
    const password = control.value;
    let error = null;
    if (!password || password.length <= minLengthRequired) {
        error = { minLength: true, minLengthRequired: minLengthRequired };
    } else if (password.length >= maxLengthRequired) {
        error = { maxLength: true, maxLengthRequired: maxLengthRequired };
    }
    if (error) {
        return {
            password: error
        };
    }
    return null;
}
