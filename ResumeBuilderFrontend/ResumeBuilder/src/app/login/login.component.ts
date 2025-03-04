import { Component } from '@angular/core';
import { Service } from '../service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginuser = {
    emailId: '',
    password: ''
  }

  constructor(private regService: Service, private route: Router) { }

  OnSubmit() {
    this.ToVerify();
  }

  ToVerify() {
    this.regService.checkUser(this.loginuser).subscribe({
      next: (data) => {
        if (data && data.userId) {
          this.regService.setUserId(data.userId);
          alert(`User ID: ${data.userId} - Login Successful`);
          this.route.navigate(["account"]);
        } else {
          alert("Invalid response from server");
        }
      },
      error: (error) => {
        console.error("Login Error:", error);
        alert(error.error.message || "User does not exist");
      },
    });
  }
 
}
