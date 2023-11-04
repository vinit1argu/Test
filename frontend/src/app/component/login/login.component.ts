import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from './passwordValidator';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  mock : any = {}
    

  constructor(private formBuilder: FormBuilder , private toastr: ToastrService , private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required,passwordValidator()]],
    });

    this.mock.U = 'vinit';
    this.mock.P = 'Vv@123';
  }
  
    
  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
      console.log(username);
      console.log(password);

      if (username == this.mock.U && password == this.mock.P) {
        console.log("okay");
        this.toastr.success('Logged In Successfully', 'Success');
            this.router.navigate(['/home']);
      } 
      
      else {
        this.toastr.error('Invalid user or password', 'Error! Try again'); 
        console.log("not ok");
      }
      
      

    }
  }
}

