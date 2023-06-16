package com.example.tipsy.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController implements ErrorController {

	// 새로고침 오류 해결
	@GetMapping({"/","/error"})
	public String index(){
		return "index.html";
	}
}
