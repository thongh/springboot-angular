package com.couture.camunda.devicecare.demo.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.couture.camunda.devicecare.demo.model.User;

public interface UserRepository extends CrudRepository<User, Long> {
    
    List<User> findByLastName(String lastName);
}
