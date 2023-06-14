package com.example.tipsy.model;

import com.example.tipsy.vo.CartVO;

import java.util.List;

public interface CartDAO {

	List<CartVO> cart(String id);

}
