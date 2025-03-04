package com.spring.resume.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.resume.entities.ResumeEducation;
import com.spring.resume.entities.ResumeExperience;
import com.spring.resume.entities.ResumeLogin;
import com.spring.resume.entities.ResumeRegister;
import com.spring.resume.entities.ResumeResume;
import com.spring.resume.entities.ResumeSkill;
import com.spring.resume.exceptions.ResumeExceptions;
import com.spring.resume.repository.ResumeEducationRepository;
import com.spring.resume.repository.ResumeExperienceRepository;
import com.spring.resume.repository.ResumeRegisterRepository;
import com.spring.resume.repository.ResumeResumeRepository;
import com.spring.resume.repository.ResumeSkillRepository;

@Service

public class ResumeServices {
	@Autowired
	private ResumeRegisterRepository resumeRepository;
	@Autowired
	private ResumeResumeRepository resumeresumeRepository;
	@Autowired
	private ResumeSkillRepository resumeskillRepository;
	@Autowired
	private ResumeEducationRepository resumeeducationRepository;
	@Autowired
	private ResumeExperienceRepository resumeexperienceRepository;

	// GetAllUser
	public List<ResumeRegister> getAllUser() {
		return resumeRepository.findAll();
	}

	// GetUserByID
	public ResumeRegister getUserById(int userId) {
		return resumeRepository.findById(userId).orElseThrow(() -> new ResumeExceptions("User Id not Found"));
	}

	// RegisterUser
	public ResumeRegister registerUser(ResumeRegister user) {
		ResumeRegister users = resumeRepository.findByEmailId(user.getEmailId());
		if (user.getEmailId().trim() == "") {
			throw new ResumeExceptions("Plese Fill all Fields");
		} else if (users != null) {
			throw new ResumeExceptions("Email Id already Exists");
		} else {
			return resumeRepository.save(user);
		}
	}

	// LoginUser
	public ResumeRegister loginUser(ResumeLogin resumeLogin) {
		ResumeRegister user = resumeRepository.findByEmailId(resumeLogin.getEmailId());
		if (user != null && user.getPassword().equals(resumeLogin.getPassword())) {
			return user;
		}

		else {
			throw new ResumeExceptions("Invalid Email and Password");
		}
	}

	// UpdateUser
	public ResumeRegister updateUser(int userId, ResumeRegister updateUser) {
		ResumeRegister existingUser = resumeRepository.findById(userId)
				.orElseThrow(() -> new ResumeExceptions("User does not Exists"));
		existingUser.setUserName(updateUser.getUserName());
		existingUser.setEmailId(updateUser.getEmailId());
		existingUser.setPassword(updateUser.getPassword());
		return resumeRepository.save(existingUser);
	}

	// Resume ka sara kam yha h
	public ResumeResume addResume(ResumeResume resumeresume) {
		return resumeresumeRepository.save(resumeresume);
	}

	public ResumeResume getResumeById(int userId) {

		return resumeresumeRepository.findById(userId).orElseThrow(() -> new ResumeExceptions("Resume NOt found"));
	}

	// skills k liye
	public ResumeSkill regSkill(ResumeSkill skill) {
		return resumeskillRepository.save(skill);
	}

	// education k liye
	public ResumeEducation regEducation(ResumeEducation education) {
		return resumeeducationRepository.save(education);
	}

	// experience k liye
	public ResumeExperience regExperience(ResumeExperience exprience) {
		return resumeexperienceRepository.save(exprience);
	}

	public ResumeSkill getSkill(int userId) {
		return resumeskillRepository.findById(userId).orElseThrow(() -> new ResumeExceptions("Skill not found"));
	}

	public ResumeExperience getExperience(int userId) {
		return resumeexperienceRepository.findById(userId)
				.orElseThrow(() -> new ResumeExceptions("Experience not found"));
	}

	public ResumeEducation getEducation(int userId) {
		return resumeeducationRepository.findById(userId)
				.orElseThrow(() -> new ResumeExceptions("Education not found"));
	}
}
