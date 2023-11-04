import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

function passwordValidator() {
  return Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/);
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  genders: string[] = ['Male', 'Female', 'Other'];


  constructor(private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone:['', [Validators.required]],
      address:['', [Validators.required]],
      dob: ['', Validators.required],
      password: ['', [Validators.required, passwordValidator()]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    if (password === confirmPassword) {
      return null;
    } else {
      return formGroup.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    }
  }

  clearPasswordMismatchError() {
    if (this.isPasswordMismatch()) {
      this.signupForm.setErrors({ passwordMismatch: true });
    } else {
      this.signupForm.setErrors(null);
    }
  }
  
  isPasswordMismatch() {
    const password = this.signupForm.get('password')?.value;
    const confirmPassword = this.signupForm.get('confirmPassword')?.value;
    return password !== confirmPassword;
  }
  
  onSubmit() {
    if (this.signupForm.valid) {

        // const username = this.signupForm.get('name')?.value;
        // const email = this.signupForm.get('email')?.value;
        // console.log(username);
        // console.log(email);

        console.log(this.signupForm.value);
        
  
    }
  }
}
