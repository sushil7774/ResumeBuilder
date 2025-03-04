package com.spring.resume.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "experiences")
public class ResumeExperience {
	@Id
	@Column(name = "userid")
	private int userId;
	private String company;
	private String jobTitle;
	private String joined;
	private String regined;

}
