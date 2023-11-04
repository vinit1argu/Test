import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null; 
    }

  
    const specialCharRegex = /[!@#$%^&*]/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;


    if (
      specialCharRegex.test(control.value) &&
      uppercaseRegex.test(control.value) &&
      lowercaseRegex.test(control.value) &&
      control.value.length >= 6
    ) {
      return null;
    }

    return { passwordInvalid: true };
  };
}
