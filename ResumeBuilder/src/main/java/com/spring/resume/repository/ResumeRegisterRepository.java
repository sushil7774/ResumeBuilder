package com.spring.resume.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.resume.entities.ResumeRegister;

@Repository
public interface ResumeRegisterRepository extends JpaRepository<ResumeRegister, Integer> {
	public ResumeRegister findByEmailId(String emailId);
	public ResumeRegister findByPassword(String password);
}
