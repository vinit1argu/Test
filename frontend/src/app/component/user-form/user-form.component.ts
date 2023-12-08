import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit{
  userForm!: FormGroup;
  genders: string[] = ['Male', 'Female', 'Other'];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataService: DataService
  ){}

  ngOnInit(): void {
    // Initalizing the form variable
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      dob: ['', Validators.required],
      role: ['', Validators.required],
      gender: ['', Validators.required]
    });
    
    // set max dob to current date
    // getting cureent date in the format YYYY-MM-DD
    const currentDate = new Date().toISOString().split('T')[0];

    // set max date to current date
    const dobInput = document.getElementById('dob') as HTMLInputElement;
    if(dobInput){
      dobInput.setAttribute('max',currentDate);
    }
  }

  onSubmit(){
    if(this.userForm.valid){
      const userData = this.userForm.value;
      console.log(userData);
      // navigating to home page
      this.dataService.postData(userData)
        .subscribe(res => {
        this.router.navigate(['/']);
        })
    }
  }
}
