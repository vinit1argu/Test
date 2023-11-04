import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm!: FormGroup;
  items: any = {};
  id:string = "";
  genders: string[] = ['Male', 'Female', 'Other'];

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService, private fb: FormBuilder) { }
  
  ngOnInit(): void {
    // Initializing  form variable
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      dob: ['', Validators.required],
      role: ['', Validators.required],
      gender: ['', Validators.required], 
    });

    this.route.params.subscribe((params)=>{
      this.id = params['id'];
      this.dataService.getDataForEdit(this.id).subscribe(result => {
        this.items =result;  
      });
      
    })
  }

  onSubmit(){
    if(this.editForm.valid){
      const userData = this.editForm.value;
      console.log(userData);
      
      // navigating to home page
      this.dataService.updateData(userData,this.items._id)
        .subscribe(res => {
        this.router.navigate(['/home']);
        })
    }
  }
}
