import { Component } from '@angular/core';
import { RegisterPojo } from '../register-pojo';
import { Service } from '../service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  registerr = {
    emailId: ''
  };
  errorMassage: String = '';
  register: RegisterPojo = new RegisterPojo();
  constructor(private userService: Service, private router: Router) { }
  OnSubmit(registerForm: NgForm) {
    if (registerForm.invalid) {
      alert('Form Value is invalid');
      return;
    }
    this.insertUser();
  }
  insertUser() {
    this.userService.createUser(this.register).subscribe({
      next: () => {
        this.errorMassage = '';
        alert('User Registered Succesfully')
        setTimeout(() => {
          this.router.navigate(['login']);
        }, 1000);
      },
      error: () => {
        if(this.register.emailId == ""){
          this.errorMassage='Plese Fill Fields All';
        }else{this.errorMassage = 'Email Id already Exists';}
        
        alert(this.errorMassage)
      }
    })
  }

}
