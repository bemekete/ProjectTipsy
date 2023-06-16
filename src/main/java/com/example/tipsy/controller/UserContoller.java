package com.example.tipsy.controller;

import com.example.tipsy.service.UserService;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

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
