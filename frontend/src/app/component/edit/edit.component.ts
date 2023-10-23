import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm!: FormGroup;
  genders: string[] = ['Male', 'Female', 'Other'];

  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
    // Initializing the form variable
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      DOB: ['', Validators.required],
      role: ['', Validators.required],
      gender: ['', Validators.required], 
    });
  }
  onSubmit() {
    if (this.editForm.valid) {
      // printing the user details.
      console.log('Form submitted:', this.editForm.value);
      console.log(this.editForm.value.name);
    }
  } 
}
