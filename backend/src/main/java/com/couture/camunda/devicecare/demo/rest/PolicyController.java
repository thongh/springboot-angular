package com.couture.camunda.devicecare.demo.rest;
import org.slf4j.Logger;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import com.couture.camunda.devicecare.demo.model.Policy;
import com.couture.camunda.devicecare.demo.repo.PolicyRepository;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
public class PolicyController {
	
	private static final Logger log = LoggerFactory.getLogger(PolicyController.class);
	
    @Autowired
    private PolicyRepository policyRepository;
    
    @RequestMapping("/policiesOfCustomer")
    public Iterable<Policy> policiesOfCustomer(@RequestParam(value="customerId", defaultValue="1") int customerId) { 	
    	Iterable<Policy> policies = policyRepository.findByCustomerId(customerId);
    	log.info("Policies found : " + policies);
    	return policies;
    }

}
