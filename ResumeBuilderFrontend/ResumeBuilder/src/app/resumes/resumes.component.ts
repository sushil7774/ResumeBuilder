import { Component } from '@angular/core';
import { ResumePojo } from '../resume-pojo';
import { Service } from '../service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resumes',
  templateUrl: './resumes.component.html',
  styleUrl: './resumes.component.css'
})
export class ResumesComponent {
  resume: ResumePojo = new ResumePojo();
  constructor(private userService: Service, private router: Router) {
    this.resume.userId = this.userService.getUserId();
  }
  OnSubmit(form: NgForm) {
    this.addresume();
    form.reset();

  }
  addresume() {
    this.userService.addResume(this.resume).subscribe({
      next: (data) => {
        this.resume = data;
        this.goToAccount();
      },
      error: (error) => {
        alert("Something went wrong");
      }
    });
  }
  goToAccount() {
    alert('Added Successfully')
    this.router.navigate([
      'account'
    ]);
  }
}
