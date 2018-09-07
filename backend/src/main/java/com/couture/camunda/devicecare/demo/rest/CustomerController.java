package com.couture.camunda.devicecare.demo.rest;
import java.util.List;

import org.slf4j.Logger;


import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import com.couture.camunda.devicecare.demo.model.Customer;
import com.couture.camunda.devicecare.demo.repo.CustomerRepository;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
public class CustomerController {
	
	private static final Logger log = LoggerFactory.getLogger(CustomerController.class);
	
    @Autowired
    private CustomerRepository customerRepository;
    
    @RequestMapping("/customer")
    public Customer customer(@RequestParam(value="email", defaultValue="jack@email.com") String email) { 	
    	List<Customer> customers = customerRepository.findByEmail(email);
    	Customer customer = customers.get(0);
    	log.info("Customer found : " + customer);
    	return customer;
    }

}
