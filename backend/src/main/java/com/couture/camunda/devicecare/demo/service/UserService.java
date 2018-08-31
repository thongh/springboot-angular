package com.couture.camunda.devicecare.demo.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.couture.camunda.devicecare.demo.model.User;
import com.couture.camunda.devicecare.demo.repo.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	private static final Logger logger = LoggerFactory.getLogger(UserService.class);
	
	public User findUserByLastname(String lastName) {
		User user = null;
		List<User> users = userRepository.findByLastName(lastName);
		user = users.get(0);
		logger.info("User found: " + user);
		return user;
	}
	
}
