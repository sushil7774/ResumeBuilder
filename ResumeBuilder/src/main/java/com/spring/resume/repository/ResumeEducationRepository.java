package com.spring.resume.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.resume.entities.ResumeEducation;

@Repository
public interface ResumeEducationRepository extends JpaRepository<ResumeEducation,Integer> {

}
