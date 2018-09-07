package com.couture.camunda.devicecare.demo.rest;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import com.couture.camunda.devicecare.demo.model.Asset;
import com.couture.camunda.devicecare.demo.repo.AssetRepository;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
public class AssetController {
	
	private static final Logger log = LoggerFactory.getLogger(AssetController.class);
	
    @Autowired
    private AssetRepository assetRepository;
    
    @RequestMapping("/asset")
    public Optional<Asset> asset(@RequestParam(value="id", defaultValue="1") Long id) { 	
    	Optional<Asset> asset = assetRepository.findById(id);
    	log.info("Asset found : " + asset);
    	return asset;
    }

}
