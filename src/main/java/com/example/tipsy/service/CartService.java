package com.example.tipsy.service;

import com.example.tipsy.vo.CartVO;

import java.util.List;

public interface CartService {
	List<CartVO> cart(String id);

}
