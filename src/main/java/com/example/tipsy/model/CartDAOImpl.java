package com.example.tipsy.model;


import com.example.tipsy.vo.CartVO;
import lombok.AllArgsConstructor;
import mapperInterface.CartMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@AllArgsConstructor
public class CartDAOImpl implements CartDAO {
	CartMapper mapper;
	@Override
	public List<CartVO> cart(String id) {
		return mapper.cart(id);
	}
}
