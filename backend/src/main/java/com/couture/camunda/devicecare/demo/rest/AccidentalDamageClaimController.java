package com.couture.camunda.devicecare.demo.rest;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import com.couture.camunda.devicecare.demo.model.AccidentalDamageClaim;
import com.couture.camunda.devicecare.demo.repo.AccidentalDamageClaimRepository;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
public class AccidentalDamageClaimController {

	private static final Logger log = LoggerFactory.getLogger(AccidentalDamageClaimController.class);

    @Autowired
    private AccidentalDamageClaimRepository accidentalDamageClaimRepository;
    
    @RequestMapping("/accidentalDamageClaim")
    public Optional<AccidentalDamageClaim> accidentalDamageClaim(@RequestParam(value="id", defaultValue="1") Long id) { 	
    	Optional<AccidentalDamageClaim> accidentalDamageClaim = accidentalDamageClaimRepository.findById(id);
    	log.info("Accidental damage claim found : " + accidentalDamageClaim);
    	return accidentalDamageClaim;
    }

}
