import { Component, OnInit } from '@angular/core';
import { RegisterPojo } from '../register-pojo';
import { Service } from '../service';
import { ActivatedRoute, Router } from '@angular/router';
import { ResumePojo } from '../resume-pojo';
import { MatDialog } from '@angular/material/dialog';
import { DialogSkillComponent } from '../dialog-skill/dialog-skill.component';
import { DialogExperienceComponent } from '../dialog-experience/dialog-experience.component';
import { DialogEducationComponent } from '../dialog-education/dialog-education.component';



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {
  regData: RegisterPojo = new RegisterPojo();
  resume: ResumePojo = new ResumePojo();
  userId: number;

  constructor(private userService: Service, private route: ActivatedRoute, private router: Router, private matdialogSkill: MatDialog) {
    this.userId = this.userService.getUserId();


  }
  openDialogSkill() {
    this.matdialogSkill.open(DialogSkillComponent);
  }
  openDialogEducation() {
    this.matdialogSkill.open(DialogEducationComponent);
  }
  openDialogExperience() {
    this.matdialogSkill.open(DialogExperienceComponent);
  }
  ngOnInit(): void {
    this.userId = this.userService.getUserId();
    console.log(this.userId);
    this.getUserData();
    this.showResume();
  }

  private getUserData() {
    this.userService.getUser(this.userId).subscribe(data => {
      this.regData = data;
    });
  }

  UpdateUser() {
    this.userService.updateUser(this.userId, this.regData)
      .subscribe({
        next: (data) => {
          this.regData = data;
          this.goToUpdated();
        },
        error: (error) => {
          alert("Something went wrong");
        }
      });

  }

  goToUpdated() {
    alert('Updated')
    this.router.navigate(['account'])
  }
  showResume() {
    this.userService.getResume(this.userId).subscribe(data => {
      this.resume = data;
    });
  }
}
