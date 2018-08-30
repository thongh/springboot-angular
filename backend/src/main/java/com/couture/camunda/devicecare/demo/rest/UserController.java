//package com.couture.camunda.devicecare.demo.rest;
//import org.springframework.beans.factory.annotation.Autowired;
//
//import org.springframework.web.bind.annotation.*;
//
//import com.couture.camunda.devicecare.demo.model.User;
//import com.couture.camunda.devicecare.demo.repo.UserRepository;
//import com.couture.camunda.devicecare.demo.service.UserService;
//
//import java.util.List;
//
////@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
//@RestController
//@RequestMapping({"/api"})
//public class UserController {
//	
//    @Autowired
//    private UserRepository userRepository;
//    
//    @GetMapping(path = {"/{id}"})
//    public User findOne(@PathVariable("id") int id){
//        return userRepository.findById(id);
//    }
//
//    @GetMapping
//    public List<User> findAll(){
//        return userRepository.findAll();
//    }
//}
