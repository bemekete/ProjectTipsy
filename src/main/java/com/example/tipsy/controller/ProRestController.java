package com.example.tipsy.controller;

import com.example.tipsy.service.ProService;
import com.example.tipsy.vo.ProVO;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/product")
@AllArgsConstructor
@Log4j2
public class ProRestController {

	ProService service;

//	상품 목록
	@GetMapping("/selectpro")
	public List<ProVO> selectPro() {
		return service.productList();
	}

//	상품 상세(디테일)
	@GetMapping("/detailpro")
	public ProVO detailPro(ProVO vo){
		vo = service.detailPro(vo);
		return vo;
	}
}
