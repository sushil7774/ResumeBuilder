package com.spring.resume.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.resume.entities.ResumeSkill;

@Repository
public interface ResumeSkillRepository extends JpaRepository<ResumeSkill,Integer>{

}
