package com.example.tipsy.controller;

import com.example.tipsy.service.ProService;
import com.example.tipsy.vo.ProVO;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	public List<ProVO> selectPro(@RequestParam("p_category") String category) {
		System.out.println(service.productList(category));
		return service.productList(category);
	}

	//	상품 상세(디테일)
	@GetMapping("/detailpro")
	public ProVO detailPro(ProVO vo){
		vo = service.detailPro(vo);
		return vo;
	}

	// 큰카테고리(술종류)
	@GetMapping("/categorypro")
	public List<ProVO> productCategory(@RequestParam("p_category") String category) {
		System.out.println(service.categoryList(category));
		return service.categoryList(category);
	}

	@GetMapping("/topsort")
	public List<ProVO> topSort(@RequestParam("topSort") String topSort){
		String sort = "1";
		if ("조회순".equals(topSort)){
			sort = "1";
		} else if ("등록순".equals(topSort)) {
			sort = "2";
		}
		return service.topSort(sort);
	}
}
