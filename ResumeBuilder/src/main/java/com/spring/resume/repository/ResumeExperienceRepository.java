package com.spring.resume.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.resume.entities.ResumeExperience;

@Repository
public interface ResumeExperienceRepository extends JpaRepository<ResumeExperience,Integer> {

}
