import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OurServiceComponent } from "../../our-service/our-service.component";
import { ResourceComponent } from "../../resource/resource.component";
@Component({
  selector: 'app-home',
  imports: [CommonModule, ReactiveFormsModule, OurServiceComponent, ResourceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  enquiry_form: any

  constructor(private fb:FormBuilder,private router: Router){
    this.enquiry_form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^\\+?[1-9]\\d{1,14}$')]],
      message: ['', [Validators.required]]
    }) as FormGroup

  }

  route_to_page(page_name:any) {
    this.router.navigate([page_name]);
    window.scrollTo(0, 0);
  }

  get firstName(){
    return this.enquiry_form.get('firstName');
  }

  get lastName() {
    return this.enquiry_form.get('lastName');
  }

  get email() {
    return this.enquiry_form.get('email');
  }

  get phone() {
    return this.enquiry_form.get('phone');
  }

  get message() {
    return this.enquiry_form.get('message');
  }

  onSubmit() {
    if (this.enquiry_form.valid) {
      const body = {
        firstName: this.firstName.value,  // Access the value of the form control
        lastName: this.lastName.value,
        email: this.email.value,
        phone: this.phone.value
      }
      console.log('Form Submitted!', body);
      
    } else {
      this.enquiry_form.markAllAsTouched(); // Marks all fields to show validation errors
    }
  }
}


