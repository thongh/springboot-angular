package com.couture.camunda.devicecare.demo.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.couture.camunda.devicecare.demo.model.Customer;

@CrossOrigin(origins = "http://localhost:4200")
public interface CustomerRepository extends CrudRepository<Customer, Long> {

    List<Customer> findByEmail(String email);
}
