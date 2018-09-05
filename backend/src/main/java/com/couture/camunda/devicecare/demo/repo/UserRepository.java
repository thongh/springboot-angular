package com.couture.camunda.devicecare.demo.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.couture.camunda.devicecare.demo.model.User;

@CrossOrigin(origins = "http://localhost:4200")
public interface UserRepository extends CrudRepository<User, Long> {
    
    List<User> findByLastName(String lastName);
    
    List<User> findByUsername(String username);
}
