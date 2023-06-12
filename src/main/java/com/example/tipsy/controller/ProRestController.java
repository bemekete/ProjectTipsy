package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.ProService;
import com.example.demo.vo.ProVO;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RestController
@RequestMapping("/restpro")
@AllArgsConstructor
@Log4j2
public class ProRestController {

	ProService service;

	@GetMapping("/selectpro")
	public List<ProVO> selectPro() {
		return service.productList();
	}
}
