import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RegisterPojo } from "./register-pojo";
import { ResumePojo } from "./resume-pojo";
import { Skills } from "./skills";
import { Experiences } from "./experiences";
import { Educations } from "./educations";
@Injectable({
  providedIn: 'root'
})
export class Service {
  private baseUrl = "http://localhost:8080";
  private userId: number = 0;
  constructor(private httpClient: HttpClient) {
    const storeUserId = localStorage.getItem("userId");
    if (storeUserId) {
      this.userId = Number(storeUserId);
    }
    if (typeof window !== "undefined" && localStorage.getItem("userId")) {
      this.userId = Number(localStorage.getItem("userId"))
    }
  }

  setUserId(id: number) {
    this.userId = id
    localStorage.setItem("userId", String(id));
  }
  getUserId() {
    return this.userId || 0;
  }
  clearUserId() {
    this.userId = 0;
    localStorage.removeItem("userId");
  }
  //For User Registration
  createUser(register: RegisterPojo): Observable<object> {
    return this.httpClient.post(`${this.baseUrl}/register`, register);
  }
  //For User Login
  checkUser(log: { emailId: string, password: string }): Observable<RegisterPojo> {
    return this.httpClient.post<RegisterPojo>(`${this.baseUrl}/login`, log);
  }
  //For Update User 
  updateUser(userId: number, register: RegisterPojo): Observable<RegisterPojo> {
    return this.httpClient.put<RegisterPojo>(`${this.baseUrl}/update/${userId}`, register);
  }
  //For User Get By id
  getUser(userId: number): Observable<RegisterPojo> {
    return this.httpClient.get<RegisterPojo>(`${this.baseUrl}/register/${userId}`);
  }
  addResume(resume: ResumePojo): Observable<ResumePojo> {
    return this.httpClient.post<ResumePojo>(`${this.baseUrl}/addresume`, resume);
  }
  getResume(userId: number): Observable<ResumePojo> {
    return this.httpClient.get<ResumePojo>(`${this.baseUrl}/getresume/${userId}`)
  }
  addSkill(skill: Skills): Observable<Skills> {
    return this.httpClient.post<Skills>(`${this.baseUrl}/regskill`, skill);
  }
  addExperience(experience: Experiences): Observable<Experiences> {
    return this.httpClient.post<Experiences>(`${this.baseUrl}/regexperience`, experience);
  }
  addEducation(education: Educations): Observable<Educations> {
    return this.httpClient.post<Educations>(`${this.baseUrl}/regeducation`, education);
  }
  getSkill(userId: number): Observable<Skills> {
    return this.httpClient.get<Skills>(`${this.baseUrl}/getskill/${userId}`);
  }
  getEducation(userId: number): Observable<Educations> {
    return this.httpClient.get<Educations>(`${this.baseUrl}/geteducation/${userId}`);
  }
  getExperience(userId: number): Observable<Experiences> {
    return this.httpClient.get<Experiences>(`${this.baseUrl}/getexperience/${userId}`);
  }

}
//userId - ye parameter se leta h but  this.userId- ye vlaue get,set method se aati h 