package com.spring.resume.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.resume.entities.ResumeResume;
@Repository
public interface ResumeResumeRepository extends JpaRepository<ResumeResume,Integer>{

	
}
