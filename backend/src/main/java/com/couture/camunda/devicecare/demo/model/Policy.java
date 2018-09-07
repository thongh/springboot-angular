package com.couture.camunda.devicecare.demo.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "policy")
public class Policy {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="policyId")
	private Long policyId;
	
	@Column(name="fundValue")
	private String fundValue;

	@Column(name="policyTerm")
	private String policyTerm;

	@Column(name="premiumTerm")
	private String premiumTerm;
	
	@Column(name="inceptionDate")
	private Date inceptionDate;
	
	@Column(name="paymentFrequency")
	private String paymentFrequency;
	
	@Column(name="installmentPremium")
	private String installmentPremium;
	
	@Column(name="pan")
	private String pan;
	
	@Column(name="sumAssured")
	private String sumAssured;
	
	@Column(name="maturityDate")
	private Date maturityDate;
	
	@Column(name="lastPremiumDate")
	private Date lastPremiumDate;
	
	@Column(name="nextDueDate")
	private Date nextDueDate;
	
	@Column(name="customerId")
	private Integer customerId;
	
	@Column(name="assetId")
	private Integer assetId;

	protected Policy() {}

	public Policy(Long policyId, String fundValue, String policyTerm, String premiumTerm, Date inceptionDate,
			String paymentFrequency, String installmentPremium, String pan, String sumAssured, Date maturityDate,
			Date lastPremiumDate, Date nextDueDate, Integer customerId, Integer assetId) {
		this.policyId = policyId;
		this.fundValue = fundValue;
		this.policyTerm = policyTerm;
		this.premiumTerm = premiumTerm;
		this.inceptionDate = inceptionDate;
		this.paymentFrequency = paymentFrequency;
		this.installmentPremium = installmentPremium;
		this.pan = pan;
		this.sumAssured = sumAssured;
		this.maturityDate = maturityDate;
		this.lastPremiumDate = lastPremiumDate;
		this.nextDueDate = nextDueDate;
		this.customerId = customerId;
		this.assetId = assetId;
	}

	public Long getPolicyId() {
		return policyId;
	}

	public String getFundValue() {
		return fundValue;
	}

	public String getPolicyTerm() {
		return policyTerm;
	}

	public String getPremiumTerm() {
		return premiumTerm;
	}

	public Date getInceptionDate() {
		return inceptionDate;
	}

	public String getPaymentFrequency() {
		return paymentFrequency;
	}

	public String getInstallmentPremium() {
		return installmentPremium;
	}

	public String getPan() {
		return pan;
	}

	public String getSumAssured() {
		return sumAssured;
	}

	public Date getMaturityDate() {
		return maturityDate;
	}

	public Date getLastPremiumDate() {
		return lastPremiumDate;
	}

	public Date getNextDueDate() {
		return nextDueDate;
	}

	public Integer getCustomerId() {
		return customerId;
	}

	public Integer getAssetId() {
		return assetId;
	}
}
