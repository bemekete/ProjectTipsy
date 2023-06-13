package com.example.tipsy.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Locale;

@Controller
public class HomeController {

	@GetMapping(value = {"/home","/"})
	public String home(Locale locale, Model model) {
		return "index";
	} // home
}
