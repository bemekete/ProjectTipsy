package com.example.tipsy.service;

import com.example.tipsy.model.CartDAO;
import com.example.tipsy.vo.CartVO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CartServiceImpl implements CartService {
	CartDAO dao;
	@Override
	public List<CartVO> cart(String id) {
		return dao.cart(id);
	}
}
