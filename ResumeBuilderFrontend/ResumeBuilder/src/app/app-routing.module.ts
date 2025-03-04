import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';

import { LoginComponent } from './login/login.component';
import { DeshboardComponent } from './deshboard/deshboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccountComponent } from './account/account.component';
import { ServicesComponent } from './services/services.component';
import { ResumesComponent } from './resumes/resumes.component';
import { ResumeviewComponent } from './resumeview/resumeview.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'deshboard', component: DeshboardComponent },
  { path: '', component: DeshboardComponent, pathMatch: 'full' },
  { path: 'navbar', component: NavbarComponent },
  { path: 'account', component: AccountComponent },
  { path: 'resumes', component: ResumesComponent },
  { path: 'services', component: ServicesComponent },
  {path:'account/resumeview',component:ResumeviewComponent},
  { path: 'account/resumes', component: ResumesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
