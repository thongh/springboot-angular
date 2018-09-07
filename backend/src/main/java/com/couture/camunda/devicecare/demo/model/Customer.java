package com.couture.camunda.devicecare.demo.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "customer")
public class Customer {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="customerId")
	private Long customerId;
	
	@Column(name="dob")
	private Date dob;

	@Column(name="email")
	private String email;

	@Column(name="postcode")
	private int postcode;
	
	@Column(name="phoneNumber")
	private String phoneNumber;
	
	@Column(name="homeAddress")
	private String homeAddress;
	
	@Column(name="postalAddress")
	private String postalAddress;
	
	@Column(name="paymentMethod")
	private String paymentMethod;
	
	@Column(name="cardNumber")
	private String cardNumber;
	
	@Column(name="cardName")
	private String cardName;
	
	@Column(name="cardExpiryDate")
	private Date cardExpiryDate;
	
	@Column(name="cardSecurityNum")
	private int cardSecurityNum;
	
	@Column(name="userId")
	private int userId;

	protected Customer() {}

	public Customer(Long customerId, Date dob, String email, int postcode, String phoneNumber,
			String homeAddress, String postalAddress, String paymentMethod, String cardNumber, String cardName,
			Date cardExpiryDate, int cardSecurityNum, int userId) {
		super();
		this.customerId = customerId;
		this.dob = dob;
		this.email = email;
		this.postcode = postcode;
		this.phoneNumber = phoneNumber;
		this.homeAddress = homeAddress;
		this.postalAddress = postalAddress;
		this.paymentMethod = paymentMethod;
		this.cardNumber = cardNumber;
		this.cardName = cardName;
		this.cardExpiryDate = cardExpiryDate;
		this.cardSecurityNum = cardSecurityNum;
		this.userId = userId;
	}

	public Long getCustomerId() {
		return customerId;
	}

	public Date getDob() {
		return dob;
	}

	public String getEmail() {
		return email;
	}

	public int getPostcode() {
		return postcode;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public String getHomeAddress() {
		return homeAddress;
	}

	public String getPostalAddress() {
		return postalAddress;
	}

	public String getPaymentMethod() {
		return paymentMethod;
	}

	public String getCardNumber() {
		return cardNumber;
	}

	public String getCardName() {
		return cardName;
	}

	public Date getCardExpiryDate() {
		return cardExpiryDate;
	}

	public int getCardSecurityNum() {
		return cardSecurityNum;
	}

	public int getUserId() {
		return userId;
	}
}
