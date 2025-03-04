import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { Skills } from '../skills';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-skill',
  templateUrl: './dialog-skill.component.html',
  styleUrl: './dialog-skill.component.css'
})
export class DialogSkillComponent {
  skill: Skills = new Skills();
  constructor(private userService: Service, private router: Router) {
    this.skill.userId = this.userService.getUserId();
  }

  OnSubmit() {
    this.addskill();
  }
  addskill() {
    this.userService.addSkill(this.skill).subscribe(
      {
        next: (data) => {
          this.skill = data;
          this.goToresume();
        },
        error: (error) => {
          alert("something went wrong");
        }
      }
    )
  }
  goToresume() {
    alert('skill added')
    this.router.navigate(['account']);
  }
}
