package com.couture.camunda.devicecare.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user")
public class User {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private Long id;
	
	@Column(name="firstName")
	private String firstName;

	@Column(name="lastName")
	private String lastName;

	@Column(name="email")
	private String email;

	protected User() {}
	
    public User(String firstName, String lastName, String email) {
    	this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    
    @Override
    public String toString() {
        return String.format(
                "Customer[id=%d, firstName='%s', lastName='%s', lastName='%s']",
                id, firstName, lastName, email);
    }
    
	public Long getId() {
		return id;
	}
	
	public String getFirstName() {
		return firstName;
	}
	
	public String getLastName() {
		return lastName;
	}
	
	public String getEmail() {
		return email;
	}
}
