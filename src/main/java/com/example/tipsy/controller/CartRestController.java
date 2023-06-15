package com.example.tipsy.controller;

import com.example.tipsy.service.CartService;
import com.example.tipsy.vo.CartVO;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/cart")
@AllArgsConstructor
@Log4j2
public class CartRestController {

	CartService service;
	@GetMapping("/list")
	public List<CartVO> basketList(HttpServletRequest request){
		String loginId = (String) request.getSession().getAttribute("loginID");
		return service.cart(loginId);
	}
}
