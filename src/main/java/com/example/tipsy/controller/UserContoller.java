package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.demo.service.UserService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Controller
@RequestMapping("/user")
@AllArgsConstructor
@Log4j2
public class UserContoller {

	UserService service;

	@GetMapping("/userList")
	public void selectList(Model model) {
		model.addAttribute("banana", service.selectList());
		log.info(model);
	}

}
