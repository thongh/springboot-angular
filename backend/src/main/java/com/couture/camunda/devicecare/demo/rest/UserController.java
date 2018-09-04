package com.couture.camunda.devicecare.demo.rest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import com.couture.camunda.devicecare.demo.DemoApplication;
import com.couture.camunda.devicecare.demo.model.User;
import com.couture.camunda.devicecare.demo.repo.UserRepository;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
public class UserController {
	
	private static final Logger log = LoggerFactory.getLogger(UserController.class);
	
    @Autowired
    private UserRepository userRepository;
    
    @RequestMapping("/user")
    public User user(@RequestParam(value="lastName", defaultValue="Bauer") String lastName) { 	
    	List<User> users = userRepository.findByLastName(lastName);
    	User user = users.get(0);
    	log.info("User found: " + user.toString());
    	return user;
    }
    
    @RequestMapping("/allusers")
    public Iterable<User> allUsers() { 	
    	Iterable<User> users = userRepository.findAll();
    	return users;
    }
}
