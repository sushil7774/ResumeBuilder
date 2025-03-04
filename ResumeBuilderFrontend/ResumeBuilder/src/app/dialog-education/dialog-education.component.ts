import { Component } from '@angular/core';
import { Educations } from '../educations';
import { Service } from '../service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-education',
  templateUrl: './dialog-education.component.html',
  styleUrl: './dialog-education.component.css'
})
export class DialogEducationComponent {
  education: Educations = new Educations();
  constructor(private userService: Service, private router: Router) {
    this.education.userId = this.userService.getUserId();
  }
  OnSubmit() {
    this.addeducation();
  };
  addeducation() {
    this.userService.addEducation(this.education).subscribe(
      {
        next: (data) => {
          this.education = data;
          this.goToeducation();
        },
        error: (error) => {
          alert('something went wrong');
        }
      }
    )
  }
  goToeducation() {
    alert('education added successfully');
    this.router.navigate(['account']);
  }
}
