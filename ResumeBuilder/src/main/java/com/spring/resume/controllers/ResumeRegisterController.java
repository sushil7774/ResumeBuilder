package com.spring.resume.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.resume.entities.ResumeEducation;
import com.spring.resume.entities.ResumeExperience;
import com.spring.resume.entities.ResumeLogin;
import com.spring.resume.entities.ResumeRegister;
import com.spring.resume.entities.ResumeResume;
import com.spring.resume.entities.ResumeSkill;
import com.spring.resume.services.ResumeServices;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ResumeRegisterController {
	@Autowired
	private ResumeServices resumeServices;

	@GetMapping("/register")
	public List<ResumeRegister> getAllUser() {
		return resumeServices.getAllUser();
	}

	@GetMapping("/register/{userId}")
	public ResponseEntity<ResumeRegister> getUserById(@PathVariable int userId) {
		return ResponseEntity.ok(resumeServices.getUserById(userId));
	}

	@PostMapping("/register")
	public ResumeRegister registerUser(@RequestBody ResumeRegister user) {
		return resumeServices.registerUser(user);
	}

	@PostMapping("/login")
	public ResumeRegister loginUser(@RequestBody ResumeLogin resumeLogin) {
		return resumeServices.loginUser(resumeLogin);
	}

	@PutMapping("/update/{userId}")
	public ResponseEntity<ResumeRegister> updateUser(@PathVariable int userId, @RequestBody ResumeRegister updateUser) {
		return ResponseEntity.ok(resumeServices.updateUser(userId, updateUser));
	}

	@PostMapping("/addresume")
	public ResumeResume addResume(@RequestBody ResumeResume resume) {
		return resumeServices.addResume(resume);
	}

	@GetMapping("/getresume/{userId}")
	public ResponseEntity<ResumeResume> getresumeById(@PathVariable int userId) {
		return ResponseEntity.ok(resumeServices.getResumeById(userId));
	}

	@PostMapping("/regskill")
	public ResumeSkill regSkill(@RequestBody ResumeSkill skill) {
		return resumeServices.regSkill(skill);
	}

	@PostMapping("/regexperience")
	public ResumeExperience regExperience(@RequestBody ResumeExperience experience) {
		return resumeServices.regExperience(experience);
	}

	@PostMapping("/regeducation")
	public ResumeEducation regEducation(@RequestBody ResumeEducation education) {
		return resumeServices.regEducation(education);
	}

	@GetMapping("/getskill/{userId}")
	public ResponseEntity<ResumeSkill> getSkill(@PathVariable int userId) {
		return ResponseEntity.ok(resumeServices.getSkill(userId));
	}

	@GetMapping("/getexperience/{userId}")
	public ResponseEntity<ResumeExperience> getExperience(@PathVariable int userId) {
		return ResponseEntity.ok(resumeServices.getExperience(userId));
	}

	@GetMapping("/geteducation/{userId}")
	public ResponseEntity<ResumeEducation> getEducation(@PathVariable int userId) {
		return ResponseEntity.ok(resumeServices.getEducation(userId));
	}
}

//
////Return Type	                      Kaha Use Hua?	                                   Kyon Use Kiya?
////List<ResumeRegister>	              getAllUsers()	                                   Jab multiple users return karne ho
////ResumeRegister	                  registerUser(), loginUser()	                   Jab ek single user return karna ho
////ResponseEntity<ResumeRegister>	  getUserById(), updateUser()	                   Jab response ke sath status code bhi bhejna ho ex.userId
