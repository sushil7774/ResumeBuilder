import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Service } from '../service';
import { ResumePojo } from '../resume-pojo';
import { Skills } from '../skills';
import { Educations } from '../educations';
import { Experiences } from '../experiences';

@Component({
  selector: 'app-resumeview',
  templateUrl: './resumeview.component.html',
  styleUrls: ['./resumeview.component.css']
})
export class ResumeviewComponent implements OnInit {
  @ViewChild('resumeContent', { static: false }) resumeContent!: ElementRef;

  resume: ResumePojo = new ResumePojo();
  skill: Skills = new Skills();
  education: Educations = new Educations();
  experience: Experiences = new Experiences();
  userId: number;

  constructor(private userService: Service) {
    this.userId = this.userService.getUserId();
  }

  ngOnInit(): void {
    this.userId = this.userService.getUserId();
    console.log(this.userId);
    this.showResume();
    this.showSkill();
    this.showEducation();
    this.showExperience();
  }

  showResume() {
    this.userService.getResume(this.userId).subscribe(data => {
      this.resume = data;
    });
  }

  showSkill() {
    this.userService.getSkill(this.userId).subscribe({
      next: (data) => {
        this.skill = data;
      },
      error: () => {
        // alert('Something went wrong');
      }
    });
  }

  showEducation() {
    this.userService.getEducation(this.userId).subscribe({
      next: (data) => {
        this.education = data;
      },
      error: () => {
        // alert('Something went wrong');
      }
    });
  }

  showExperience() {
    this.userService.getExperience(this.userId).subscribe({
      next: (data) => {
        this.experience = data;
      },
      error: () => {
        // alert('Something went wrong');
      }
    });
  }

}  
