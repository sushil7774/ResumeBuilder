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
@Table(name = "resumes")
public class ResumeResume {
	@Id
	@Column(name = "userid")
	private int userId;
	private String email;
	private String resumetitle;
	private String fullname;
	private String religion;
	private String nationality;
	private String gender;
	private String marital;
	private String mobile;
	private String dateofbirth;
	private String objective;
	private String hobbies;
	private String languages;
	private String address;
}
