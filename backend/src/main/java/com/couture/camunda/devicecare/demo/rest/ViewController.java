package com.couture.camunda.devicecare.demo.rest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController {
    @RequestMapping({ "/user-admin" })
	public String index() {
        return "forward:/index.html";
    }
}
