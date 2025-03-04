import { Component } from '@angular/core';
import { Service } from '../service';
import { Router } from '@angular/router';
import { Experiences } from '../experiences';

@Component({
  selector: 'app-dialog-experience',
  templateUrl: './dialog-experience.component.html',
  styleUrl: './dialog-experience.component.css'
})
export class DialogExperienceComponent {
experience :Experiences=new Experiences();
  constructor(private userService: Service, private router: Router) {
this.experience.userId=this.userService.getUserId();
  }
  OnSubmit() {
    this.addexperience();
  }
  addexperience() {
    this.userService.addExperience(this.experience).subscribe(
      {
        next:(data) =>{
this.experience=data;
this.goToexperience();
        },
        error:(error) =>{
alert('something went wrong')
        }
      }
    )
  }
  goToexperience(){
    alert('experience added successfull');
    this.router.navigate(['account'])

  }
}
