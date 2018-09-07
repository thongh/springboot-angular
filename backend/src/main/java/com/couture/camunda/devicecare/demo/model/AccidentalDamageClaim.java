package com.couture.camunda.devicecare.demo.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "accidentaldamageclaim")
public class AccidentalDamageClaim {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="claimId")
	private Long claimId;
	
	@Column(name="dateOfDamage")
	private Date dateOfDamage;

	@Column(name="locationOfDamage")
	private String description;
	
	@Column(name="possessor")
	private String possessor;
	
	@Column(name="typeOfDamage")
	private String typeOfDamage;
	
	@Column(name="assessmentStatus")
	private String assessmentStatus;
	
	@Column(name="coverageAmount")
	private String coverageAmount;
	
	@Column(name="policyId")
	private Integer policyId;

	protected AccidentalDamageClaim() {}

	public AccidentalDamageClaim(Long claimId, Date dateOfDamage, String description, String possessor,
			String typeOfDamage, String assessmentStatus, String coverageAmount, Integer policyId) {
		super();
		this.claimId = claimId;
		this.dateOfDamage = dateOfDamage;
		this.description = description;
		this.possessor = possessor;
		this.typeOfDamage = typeOfDamage;
		this.assessmentStatus = assessmentStatus;
		this.coverageAmount = coverageAmount;
		this.policyId = policyId;
	}

	public Long getClaimId() {
		return claimId;
	}

	public Date getDateOfDamage() {
		return dateOfDamage;
	}

	public String getDescription() {
		return description;
	}

	public String getPossessor() {
		return possessor;
	}

	public String getTypeOfDamage() {
		return typeOfDamage;
	}

	public String getAssessmentStatus() {
		return assessmentStatus;
	}

	public String getCoverageAmount() {
		return coverageAmount;
	}

	public Integer getPolicyId() {
		return policyId;
	} 

}
