package com.example.tipsy.model;

import com.example.tipsy.dto.CartDto;
import com.example.tipsy.vo.ProVO;

import java.util.List;

public interface ProDAO {

	List<ProVO> productList();

	ProVO detailPro(ProVO vo);

	int insertCart(CartDto dto);

}
