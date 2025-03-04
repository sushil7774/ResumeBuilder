import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DeshboardComponent } from './deshboard/deshboard.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AccountComponent } from './account/account.component';
import { ServicesComponent } from './services/services.component';
import { ResumesComponent } from './resumes/resumes.component';
import { ResumeviewComponent } from './resumeview/resumeview.component';
import { DialogSkillComponent } from './dialog-skill/dialog-skill.component';
import { DialogExperienceComponent } from './dialog-experience/dialog-experience.component';
import { DialogEducationComponent } from './dialog-education/dialog-education.component';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DeshboardComponent,
    NavbarComponent,
    AccountComponent,
    ServicesComponent,
    ResumesComponent,
    ResumeviewComponent,
    DialogSkillComponent,
    DialogExperienceComponent,
    DialogEducationComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
