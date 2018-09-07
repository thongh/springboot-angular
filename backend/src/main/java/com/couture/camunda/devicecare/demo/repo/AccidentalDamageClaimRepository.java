package com.couture.camunda.devicecare.demo.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.couture.camunda.devicecare.demo.model.AccidentalDamageClaim;

@CrossOrigin(origins = "http://localhost:4200")
public interface AccidentalDamageClaimRepository extends CrudRepository<AccidentalDamageClaim, Long> {
}
