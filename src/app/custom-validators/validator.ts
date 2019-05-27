import {AbstractControl, ValidatorFn} from "@angular/forms";
import { UserService } from '../services/user/user.service';


export function usedValidator(userService : UserService) : ValidatorFn{
    return (control: AbstractControl): {[key: string]: any} | null => {
        return userService.checkUsername(control.value) ? {'used': {value: control.value}} : null;
    };
}